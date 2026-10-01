import { Box3, Object3D, PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

export const fitCameraToObject = (
    camera: PerspectiveCamera,
    controls: OrbitControls,
    selection: Object3D[],
    fitOffset = 1.3, // 15% padding around the edges
) => {
    const worldBox = new Box3();
    worldBox.makeEmpty();

    for (const object of selection) {
        object.updateMatrixWorld(true);
        worldBox.expandByObject(object);
    }

    const center = new Vector3();
    worldBox.getCenter(center);

    // 1. Get the global size of the object to look for orientation mismatches
    const globalSize = new Vector3();
    worldBox.getSize(globalSize);

    // 2. Automatically find the "Front" based on the widest profile side
    const direction = new Vector3();

    if (globalSize.x >= globalSize.z) {
        // Model is correctly oriented on the X-axis: Look from the standard front (+Z)
        direction.set(1, 0.2, 1).normalize();
    } else {
        // Model is rotated sideways from Blender: Shift camera 90 degrees to face the X-axis instead
        direction.set(1, 0.2, -0.3).normalize();
    }

    // 3. Create a temporary camera position to measure exact visual bounds from this angle
    const cameraLocalBox = new Box3();
    const targetCamPosition = new Vector3().copy(center).addScaledVector(direction, 10);
    const tempCamera = camera.clone();

    tempCamera.position.copy(targetCamPosition);
    tempCamera.lookAt(center);
    tempCamera.updateMatrixWorld();

    const tempMatrix = tempCamera.matrixWorldInverse;
    const localVertex = new Vector3();

    for (const object of selection) {
        object.traverse((child) => {
            if ((child as any).isMesh) {
                const geometry = (child as any).geometry;
                const positionAttribute = geometry.attributes.position;

                for (let i = 0; i < positionAttribute.count; i++) {
                    localVertex.fromBufferAttribute(positionAttribute, i);
                    localVertex.applyMatrix4((child as any).matrixWorld).applyMatrix4(tempMatrix);
                    cameraLocalBox.expandByPoint(localVertex);
                }
            }
        });
    }

    const localSize = new Vector3();
    cameraLocalBox.getSize(localSize);

    // 4. Calculate FOV distances using trigonometry
    const vFovRad = (camera.fov * Math.PI) / 180;
    const hFovRad = 2 * Math.atan(Math.tan(vFovRad / 2) * camera.aspect);

    const distanceToFitHeight = localSize.y / 2 / Math.tan(vFovRad / 2);
    const distanceToFitWidth = localSize.x / 2 / Math.tan(hFovRad / 2);

    const distance = Math.max(distanceToFitHeight, distanceToFitWidth) * fitOffset;

    // 5. Apply the final calculations safely to camera and controls
    controls.target.copy(center);
    controls.maxDistance = distance * 10;
    controls.enableZoom = true;

    camera.near = distance / 100;
    camera.far = Math.max(100, distance * 4);
    camera.updateProjectionMatrix();

    // Set the final camera coordinates relative to the object's true center
    camera.position.copy(center).addScaledVector(direction, distance);

    controls.update();
};
