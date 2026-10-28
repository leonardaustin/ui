/**
 * SettingRow — a label + description + action layout for settings pages.
 *
 * Each row displays a setting name and description on the left, with a
 * control (typically a `<Toggle>`) on the right. Rows are separated by
 * a bottom border for visual grouping.
 *
 * @example With a toggle
 * ```tsx
 * <SettingRow
 *   label="Reduced Motion"
 *   description="Disable animations and transitions"
 *   action={<Toggle checked={reducedMotion} onChange={setReducedMotion} />}
 * />
 * ```
 *
 * @example With any control
 * ```tsx
 * <SettingRow
 *   label="Language"
 *   description="Choose your preferred language"
 *   action={<SelectDropdown value={lang} onChange={setLang} options={langs} />}
 * />
 * ```
 */
import type { ReactNode } from "react";
interface SettingRowProps {
    /** The setting name displayed as a small, medium-weight label. */
    label: string;
    /** A brief description shown below the label in a muted style. */
    description?: string;
    /**
     * The control rendered on the right side of the row.
     * Typically a `<Toggle>`, but can be any React node.
     */
    action: ReactNode;
    /** Additional utility classes appended to the root container. */
    className?: string;
}
export declare function SettingRow({ label, description, action, className, }: SettingRowProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SettingRow.d.ts.map