import { type ToneClasses, type ToneColor } from "../../lib/tones";
/** Badge colours: the shared tone palette. */
export type BadgeColor = ToneColor;
/** The subset of tone classes Badge and StatusDot read. */
export type BadgeColorClasses = Pick<ToneClasses, "soft" | "outline" | "fill" | "dot" | "text">;
/** The shared tone table (`tones`), typed as Badge's colour table. */
export declare const badgeColors: Record<BadgeColor, BadgeColorClasses>;
//# sourceMappingURL=badgeColors.d.ts.map