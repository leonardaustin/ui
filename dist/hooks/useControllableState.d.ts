export interface UseControllableStateOptions<T> {
    /** Controlled value. `undefined` means uncontrolled; `null` is a controlled value. */
    value?: T;
    /** Initial value when uncontrolled. */
    defaultValue: T;
    /** Called with every new value, controlled or not. */
    onChange?: (value: T) => void;
}
/**
 * State that a parent may control through `value`, or leave to the component
 * by passing only `defaultValue`. Returns the current value and a setter that
 * updates internal state when uncontrolled and always calls `onChange`.
 */
export declare function useControllableState<T>({ value, defaultValue, onChange, }: UseControllableStateOptions<T>): [T, (next: T) => void];
