export interface AudioPlayerHandle {
    /** Seek in seconds, clamped to the recording. Queued until metadata loads. */
    seekTo: (seconds: number) => void;
}
export interface AudioPlayerProps {
    src: string;
    title?: string;
    preload?: "none" | "metadata" | "auto";
    onTimeUpdate?: (seconds: number) => void;
    onError?: (error: Error) => void;
    downloadHref?: string;
    playbackRates?: readonly number[];
    className?: string;
}
export declare const AudioPlayer: import("react").ForwardRefExoticComponent<AudioPlayerProps & import("react").RefAttributes<AudioPlayerHandle>>;
//# sourceMappingURL=AudioPlayer.d.ts.map