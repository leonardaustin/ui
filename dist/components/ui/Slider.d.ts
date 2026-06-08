export interface SliderProps {
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
    /** Called when the user releases the slider (pointerup / change) */
    onCommit?: (value: number) => void;
    label?: string;
    showValue?: boolean;
    className?: string;
}
export declare function Slider({ min, max, step, value, onChange, onCommit, label, showValue, className, }: SliderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Slider.d.ts.map