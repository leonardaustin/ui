/** Civil-date validation: no timezone conversion or Date rollover. */
export declare function datePartsError(value: {
    day: string;
    month: string;
    year: string;
}, { required, minYear, maxYear }?: {
    required?: boolean | undefined;
    minYear?: number | undefined;
    maxYear?: number | undefined;
}): string | undefined;
//# sourceMappingURL=dateParts.d.ts.map