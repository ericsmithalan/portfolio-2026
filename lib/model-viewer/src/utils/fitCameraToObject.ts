import { Box3, Object3D, PerspectiveCamera, Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const size = new Vector3();
const center = new Vector3();
const box = new Box3();

export const fitCameraToObject = (
    camera: PerspectiveCamera,
    controls: OrbitControls,
    selection: Object3D[],
    fitOffset = 0,
) => {
    box.makeEmpty();
    for (const object of selection) {
        box.expandByObject(object);
    }

    box.getSize(size);
    box.getCenter(center);

    const maxSize = Math.max(size.x, size.y, size.z);

    // Calculate distance needed for vertical field of view
    const fitHeightDistance =
        maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));

    // Calculate distance needed for horizontal field of view based on aspect ratio
    const fitWidthDistance = fitHeightDistance / camera.aspect;

    // Use the maximum of the two distances, then multiply by the offset padding
    const distance = Math.max(fitHeightDistance, fitWidthDistance) * fitOffset;

    // Get the current viewing direction of the camera
    const direction = new Vector3()
        .subVectors(camera.position, controls.target)
        .normalize();

    // Configure controls boundaries
    controls.maxDistance = distance * 10;
    controls.target.copy(center);
    controls.enableZoom = true;

    // Update clipping planes safely
    camera.near = distance / 100;
    camera.far = distance * 100;
    camera.updateProjectionMatrix();

    // Position camera along the viewing direction vector away from the new center
    camera.position.copy(center).addScaledVector(direction, distance);

    controls.update();
};
