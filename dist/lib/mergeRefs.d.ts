import type { Ref, RefCallback } from "react";
/**
 * Combines refs so one element can be attached to all of them. Cleanup
 * functions returned by callback refs (React 19) are kept and run on detach.
 */
export declare function mergeRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T>;
