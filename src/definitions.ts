declare module '@capacitor/core' {
  interface PluginRegistry {
    LightSensor: LightSensorPlugin;
  }
}

/**
 * @typedef SensorManager
 * @property {number} SENSOR_DELAY_FASTEST 0
 * @property {string} SENSOR_DELAY_GAME 1
 * @property {string} SENSOR_DELAY_UI 2
 * @property {string} SENSOR_DELAY_NORMAL 3
 */

/**
 * SensorManager for android only
 * See here: https://developer.android.com/reference/android/hardware/SensorManager#SENSOR_DELAY_FASTEST
 * @enum {SensorManager}
 */
export enum SensorManager {
  SENSOR_DELAY_FASTEST = 0, //get sensor data as fast as possible
  SENSOR_DELAY_GAME = 1, //rate suitable for games
  SENSOR_DELAY_UI = 2, //rate suitable for the user interface
  SENSOR_DELAY_NORMAL = 3, //rate (default) suitable for screen orientation changes
}

export interface LightSensorPlugin {
  /**
   * A number, or a string containing a number.
   * @typedef {object} option
   * @property {SensorManager=1} SensorDelay Delay rate of the sensor
   */

  /**
   * Initialize of the light sensor with settings
   * @param {option=} option of light sensor
   * @returns {Promise} Is initialization of light sensor succeed or not
   */
  init(option?: { SensorDelay: SensorManager }): Promise<void>;

  /**
   * Register onLightSensorChanged listener
   * @returns void
   */
  registerListener(): Promise<void>;

  /**
   * Unregister onLightSensorChanged listener
   * @returns void
   */
  unregisterListener(): Promise<void>;

  
  /**
   * Get light sensor information
   * @returns {Promise} Return information of the sensor or error
   */
  getInfo(): Promise<{
    vendor: String;
    version: Number;
    type: Number;
    maxRange: Number;
    resolution: Number;
    power: Number;
    minDelay: Number;
    maxDelay: Number;
  } | void>;

  /**
   * Check is light sensor available
   * @returns {Promise} Return the status of the light sensor
   */
  isAvailable(): Promise<{ status: Boolean }>;

  /**
   * onLightSensorChanged
   *
   * @event onLightSensorChanged
   * @type {object}
   * @returns {"isTrusted":Boolean,"accuracy":Number,"timestamp":Number,"value":Number}
   */
}

//See https://developer.android.com/reference/android/hardware/SensorManager#SENSOR_DELAY_FASTEST
