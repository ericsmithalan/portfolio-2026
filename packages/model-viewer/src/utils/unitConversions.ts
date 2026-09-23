import { Vector3 } from 'three';

const METERS_TO_INCHES = 39.3700787402;

interface Vector3Fraction {
    x: Fraction;
    y: Fraction;
    z: Fraction;
}

interface Fraction {
    number: number;
    decimal: number;
    denominator: number;
    numerator: number;
    formatted: string;
}

export const convertMeterToInch = (vector: Vector3): Vector3 => {
    const arr: Array<number> = [vector.x, vector.y, vector.z].sort(
        (a, b) => a - b,
    );

    const thickness = arr[0];
    const width = arr[1];
    const length = arr[2];

    return new Vector3(
        Number((width * METERS_TO_INCHES).toFixed(4)),
        Number((length * METERS_TO_INCHES).toFixed(4)),
        Number((thickness * METERS_TO_INCHES).toFixed(4)),
    );
};

export const convertMeterToInchRaw = (vector: Vector3): Vector3 => {
    const x = vector.x;
    const y = vector.y;
    const z = vector.z;

    return new Vector3(
        Number((x * METERS_TO_INCHES).toFixed(4)),
        Number((y * METERS_TO_INCHES).toFixed(4)),
        Number((z * METERS_TO_INCHES).toFixed(4)),
    );
};

export const getLengthWidthThickness = (vector: Vector3) => {
    const inches = convertMeterToInchRaw(vector);
    const arr = [inches.x, inches.y, inches.z].sort((a, b) => a - b);

    return {
        thickness: arr[0], // Smallest
        width: arr[1], // Middle
        length: arr[2], // Largest
    };
};

export const convertToBordFeet = (vector: Vector3) => {
    const { length, width, thickness } = getLengthWidthThickness(vector);

    // Standard rule: Thicknesses less than 1 inch are calculated as 1 inch minimum
    const nominalThickness = thickness < 1 ? 1 : thickness;

    // Formula using all-inch inputs: (T * W * L) / 144
    const boardFeet = (nominalThickness * width * length) / 144;

    return Number(boardFeet.toFixed(2));
};

export const convertInchToMeter = (vector: Vector3): Vector3 => {
    const x = vector.x;
    const y = vector.y;
    const z = vector.z;

    return new Vector3(
        Number((x / METERS_TO_INCHES).toFixed(2)),
        Number((y / METERS_TO_INCHES).toFixed(2)),
        Number((z / METERS_TO_INCHES).toFixed(2)),
    );
};

export const toFraction = (
    vector: Vector3,
    lowestD: number = 32,
): Vector3Fraction => {
    const vect = convertMeterToInch(vector);
    return {
        x: getFraction(vect.x, lowestD),
        y: getFraction(vect.y, lowestD),
        z: getFraction(vect.z, lowestD),
    };
};

const getFraction = (
    value: number,
    targetDenominator: number = 32,
): Fraction => {
    const integer = Math.floor(value);
    const remainder = value - integer;

    // Accurate rounding to the nearest target denominator unit
    let numerator = Math.round(remainder * targetDenominator);
    let denominator = targetDenominator;

    // Handle rounding up to the next whole integer (e.g., 32/32 becomes +1)
    if (numerator === denominator) {
        return {
            decimal: value,
            number: integer + 1,
            denominator: 1,
            numerator: 0,
            formatted: `${integer + 1}"`,
        };
    }

    // Simplify the fraction (e.g., 16/32 becomes 1/2)
    while (numerator % 2 === 0 && denominator % 2 === 0 && numerator > 0) {
        numerator /= 2;
        denominator /= 2;
    }

    let str = '';
    if (numerator === 0) {
        str = `${integer}"`;
    } else if (integer !== 0) {
        str = `${integer} ${numerator}/${denominator}"`;
    } else {
        str = `${numerator}/${denominator}"`;
    }

    return {
        decimal: value,
        number: integer,
        denominator: denominator,
        numerator: numerator,
        formatted: str,
    };
};
