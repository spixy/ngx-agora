import { LogLevel } from '../enums/log-level.enum';

/**
 * Provides methods to enable/disable log upload and set output log level.
 */
export interface Logger {
  /** Outputs all logs. */
  DEBUG: LogLevel.Debug;
  /** Outputs logs of the INFO, WARNING and ERROR levels. */
  INFO: LogLevel.Info;
  /** Outputs logs of the WARNING and ERROR levels. */
  WARNING: LogLevel.Warning;
  /** Outputs logs of the ERROR level. */
  ERROR: LogLevel.Error;
  /** Outputs no logs. */
  NONE: LogLevel.None;
  debug: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  warning: (message: string) => void;

  /**
   * This method disables log upload.
   *
   * By default, the log-upload function is disabled. If you have used
   * [enableLogUpload](https://docs.agora.io/en/Video/API%20Reference/web/modules/agorartc.logger.html#enablelogupload),
   * call this method when you need to stop uploading the log.
   *
   * @example
   * AgoraRTC.Logger.disableLogUpload();
   */
  disableLogUpload: () => void;
  /**
   * Call this method to enable log upload to Agora’s server.
   *
   * The log-upload function is disabled by default, if you need to enable this function,
   * please call this method before all the other methods.
   *
   * @remarks
   * If the user fails to join the channel, the log information is not available on Agora’s server.
   *
   * @example
   * AgoraRTC.Logger.enableLogUpload();
   */
  enableLogUpload: () => void;
  /**
   * This method sets the output log level.
   *
   * The log level follows the sequence of NONE, ERROR, WARNING, INFO, and DEBUG.
   * For example, if you set the log level as AgoraRTC.Logger.setLogLevel(AgoraRTC.Logger.INFO);,
   * then you can see logs in levels INFO, ERROR, and WARNING.
   */
  setLogLevel: (level: LogLevel) => void;
}
