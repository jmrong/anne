import { DetectionCallback, PorcupineKeyword, PorcupineModel, PorcupineOptions } from './types';
import { BuiltInKeyword } from './built_in_keywords';
export declare class PorcupineWorker {
    private readonly _worker;
    private readonly _version;
    private readonly _frameLength;
    private readonly _sampleRate;
    private static _wasm;
    private static _wasmSimd;
    private static _sdk;
    private constructor();
    /**
     * Get Porcupine engine version.
     */
    get version(): string;
    /**
     * Get Porcupine frame length.
     */
    get frameLength(): number;
    /**
     * Get sample rate.
     */
    get sampleRate(): number;
    /**
     * Get Porcupine worker instance.
     */
    get worker(): Worker;
    /**
     * Creates an instance of the Porcupine wake word engine using either
     * a '.pv' file in public directory or a base64'd string.
     * The model size is large, hence it will try to use the existing one
     * if it exists, otherwise saves the model in storage.
     *
     * @param accessKey AccessKey generated by Picovoice Console.
     * @param keywords - Built-in or Base64
     * representations of keywords and their sensitivities.
     * Can be provided as an array or a single keyword.
     * @param keywordDetectionCallback - User-defined callback invoked upon detection of the wake phrase.
     * The only input argument is the index of detected keyword (phrase).
     * @param model object containing a base64 string
     * representation of or path to public binary of a Porcupine parameter model used to initialize Porcupine.
     * @param model.base64 The model in base64 string to initialize Leopard.
     * @param model.publicPath The model path relative to the public directory.
     * @param model.customWritePath Custom path to save the model in storage.
     * Set to a different name to use multiple models across `Porcupine` instances.
     * @param model.forceWrite Flag to overwrite the model in storage even if it exists.
     * @param model.version Leopard model version. Set to a higher number to update the model file.
     * @param options Optional configuration arguments.
     * @param options.processErrorCallback User-defined callback invoked if any error happens
     * while processing the audio stream. Its only input argument is the error message.
     *
     * @returns An instance of PorcupineWorker.
     */
    static create(accessKey: string, keywords: Array<PorcupineKeyword | BuiltInKeyword> | PorcupineKeyword | BuiltInKeyword, keywordDetectionCallback: DetectionCallback, model: PorcupineModel, options?: PorcupineOptions): Promise<PorcupineWorker>;
    /**
     * Set base64 wasm file.
     * @param wasm Base64'd wasm file to use to initialize wasm.
     */
    static setWasm(wasm: string): void;
    /**
     * Set base64 wasm file with SIMD feature.
     * @param wasmSimd Base64'd wasm file to use to initialize wasm.
     */
    static setWasmSimd(wasmSimd: string): void;
    static setSdk(sdk: string): void;
    /**
     * Processes a frame of audio in a worker.
     * The transcript result will be supplied with the callback provided when initializing the worker either
     * by 'fromBase64' or 'fromPublicDirectory'.
     * Can also send a message directly using 'this.worker.postMessage({command: "process", pcm: [...]})'.
     *
     * @param pcm A frame of audio sample.
     */
    process(pcm: Int16Array): void;
    /**
     * Releases resources acquired by WebAssembly module.
     */
    release(): Promise<void>;
    /**
     * Terminates the active worker. Stops all requests being handled by worker.
     */
    terminate(): void;
}
//# sourceMappingURL=porcupine_worker.d.ts.map