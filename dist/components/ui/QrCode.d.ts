import { type ReactNode } from "react";
import { type QrErrorCorrection } from "../../lib/qrCode";
export interface QrCodeProps {
    /**
     * Text to encode, e.g. a URL or an `otpauth://` URI for authenticator apps.
     * An empty string renders nothing.
     */
    value: string;
    /**
     * How much of the code can be damaged and still scan: L ≈ 7%, M ≈ 15%,
     * Q ≈ 25%, H ≈ 30%. Higher levels produce denser codes.
     */
    errorCorrection?: QrErrorCorrection;
    /** Rendered width and height in pixels. */
    size?: number;
    /** Light border around the code, in modules. The spec asks for 4. */
    margin?: number;
    /** Accessible description of what the code contains. */
    "aria-label"?: string;
    /**
     * Rendered instead when `value` is too long to fit in a QR code at this
     * error-correction level (2,953 bytes at L down to 1,273 at H).
     */
    fallback?: ReactNode;
    className?: string;
}
/**
 * A scannable QR code rendered as crisp SVG, with no runtime dependencies.
 * Colours come from `--qr-foreground` / `--qr-background` so it stays
 * dark-on-light in every theme.
 */
export declare function QrCode({ value, errorCorrection, size, margin, "aria-label": ariaLabel, fallback, className, }: QrCodeProps): import("react/jsx-runtime").JSX.Element | null;
//# sourceMappingURL=QrCode.d.ts.map