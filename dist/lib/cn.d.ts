/**
 * Minimal first-party clsx-equivalent. Flattens strings, numbers, nested
 * arrays, and objects (key kept when its value is truthy) into a space-joined
 * className string; falsy values are ignored. Inlined so the package carries
 * no runtime dependency for a few lines of trivial string-joining.
 */
export type ClassValue = ClassValue[] | Record<string, unknown> | string | number | bigint | null | boolean | undefined;
export declare function cn(...inputs: ClassValue[]): string;
//# sourceMappingURL=cn.d.ts.map