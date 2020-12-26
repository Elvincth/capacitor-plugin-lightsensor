declare module '@capacitor/core' {
  interface PluginRegistry {
    LightSensor: LightSensorPlugin;
  }
}

export enum SensorManager {
  SENSOR_DELAY_FASTEST = 0, //get sensor data as fast as possible
  SENSOR_DELAY_GAME = 1, //rate suitable for games
  SENSOR_DELAY_UI = 2, //rate suitable for the user interface
  SENSOR_DELAY_NORMAL = 3, //rate (default) suitable for screen orientation changes
}

export interface LightSensorPlugin {
  init(option?: { SensorDelay: SensorManager }):  Promise<void>;

  registerListener(): void;

  unregisterListener(): void;
  /*
        sensorObj.put("vendor", mLight.getVendor()); //String
        sensorObj.put("version", mLight.getVersion());//Int
        sensorObj.put("type", mLight.getType());//Number
        sensorObj.put("maxRange", mLight.getMaximumRange());//Number
        sensorObj.put("resolution", mLight.getResolution());//Number
        sensorObj.put("power", mLight.getPower());//Number
        sensorObj.put("minDelay", mLight.getMinDelay());//Number
        sensorObj.put("maxDelay", mLight.getMaxDelay());//Number

*/
  getInfo(): Promise<{
    vendor: Number;
    version: Number;
    type: Number;
    maxRange: Number;
    resolution: Number;
    power: Number;
    minDelay: Number;
    maxDelay: Number;
  } | void>;

  isAvailable(): Promise<{ status: Boolean }>;
}

//See https://developer.android.com/reference/android/hardware/SensorManager#SENSOR_DELAY_FASTEST
