/** Palette colours, each backed by the theme's colour tokens. */
export type ToneColor = "green" | "yellow" | "red" | "blue" | "purple" | "gray" | "teal" | "rose" | "accent";
/** Meaning-first aliases for the palette. */
export type SemanticTone = "success" | "warning" | "danger" | "info" | "neutral";
/** Any tone name: a palette colour or a semantic alias. */
export type Tone = ToneColor | SemanticTone;
/** The class strings each surface needs for one tone. */
export interface ToneClasses {
    /** Muted background + foreground: a soft badge. */
    soft: string;
    /** Border + foreground on a transparent background: an outline badge. */
    outline: string;
    /** Muted background only: alert surfaces, selected outline badges. */
    fill: string;
    /** Solid background: status dots, toast accent bars. */
    dot: string;
    /** Foreground: icons, labels beside a dot, trend values. */
    text: string;
    /** Low-contrast border that pairs with `fill` (alert outlines). */
    border: string;
}
/** Which palette colour each semantic alias uses. */
export declare const semanticTones: Record<SemanticTone, ToneColor>;
/** One row of classes per palette colour. */
export declare const tones: Record<ToneColor, ToneClasses>;
/** True when `value` is a tone name (palette colour or semantic alias). */
export declare function isTone(value: unknown): value is Tone;
/** Resolve a tone name (palette colour or semantic alias) to its colour. */
export declare function toneColor(tone: Tone): ToneColor;
/** Resolve a tone name (palette colour or semantic alias) to its classes. */
export declare function toneClasses(tone: Tone): ToneClasses;
//# sourceMappingURL=tones.d.ts.map