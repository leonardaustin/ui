export type QrErrorCorrection = "L" | "M" | "Q" | "H";
export interface QrMatrix {
    /** Modules per side (21 for version 1, +4 per version). */
    readonly size: number;
    readonly version: number;
    /** `modules[y][x]`, `true` for a dark module. */
    readonly modules: ReadonlyArray<ReadonlyArray<boolean>>;
}
/** Thrown when the text doesn't fit in a version 40 symbol at the chosen level. */
export declare class QrCapacityError extends RangeError {
    constructor();
}
/**
 * Encodes `text` (UTF-8, byte mode) as a QR Code matrix. Throws a RangeError
 * if the level isn't L/M/Q/H, and a QrCapacityError (also a RangeError) if the
 * text is too long for a version 40 symbol at that level (2,953 bytes at L,
 * 2,331 at M, 1,663 at Q, 1,273 at H).
 */
export declare function encodeQrCode(text: string, errorCorrection?: QrErrorCorrection): QrMatrix;
//# sourceMappingURL=qrCode.d.ts.map