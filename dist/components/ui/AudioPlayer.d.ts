export interface AudioPlayerHandle {
    /** Seek in seconds, clamped to the recording. Queued until metadata loads. */
    seekTo: (seconds: number) => void;
}
export interface AudioPlayerProps {
    src: string;
    /** Accessible group name; visible only with variant="card". */
    title?: string;
    preload?: "none" | "metadata" | "auto";
    onTimeUpdate?: (seconds: number) => void;
    onError?: (error: Error) => void;
    downloadHref?: string;
    /** Download filename, used when downloadHref is set. */
    downloadName?: string;
    /** Plain controls by default; card adds a bordered surface and visible title. */
    variant?: "plain" | "card";
    /** Positive finite skip interval in seconds; false hides skip controls. */
    skipSeconds?: number | false;
    /** Show an optional mute toggle. Defaults to false. */
    showMute?: boolean;
    /** Space and K toggle playback on the focused seek slider. Defaults to true. */
    keyboardShortcuts?: boolean;
    /** Finite positive rates, sorted ascending with 1× always included. Defaults to [1, 1.25, 1.5, 2]. */
    playbackRates?: readonly number[];
    className?: string;
}
export declare const AudioPlayer: import("react").ForwardRefExoticComponent<AudioPlayerProps & import("react").RefAttributes<AudioPlayerHandle>>;
//# sourceMappingURL=AudioPlayer.d.ts.map