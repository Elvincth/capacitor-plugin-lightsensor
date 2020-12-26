import { WebPlugin } from '@capacitor/core';
import { LightSensorPlugin, SensorManager } from './definitions';

export class LightSensorWeb extends WebPlugin implements LightSensorPlugin {
  constructor() {
    super({
      name: 'LightSensor',
      platforms: ['web'],
    });
  }

  //Trigger the custom event and pass in the changed lux
  private onLightSensorChanged(event: any): void {
    var evt = new CustomEvent<{
      accuracy: Number;
      timestamp: Number;
      value: Number;
    }>('onLightSensorChanged', {
      detail: {
        accuracy: -1,
        timestamp: Number(
          (performance.now() + performance.timeOrigin).toFixed(0),
        ), //millisecond
        value: event.value,
      },
    });
    //Trigger the evt
    window.dispatchEvent(evt);
  }

  //Used to register the listener
  protected onResume(): void {
    window.addEventListener('devicelight', this.onLightSensorChanged);
  }

  //Used to pause the sensor
  protected onPause(): void {
    window.removeEventListener('devicelight', this.onLightSensorChanged);
  }

  /**
   * Unregister onLightSensorChanged listener
   * @returns void
   */
  unregisterListener(): void {
    this.onPause();
  }

  /**
   * Register onLightSensorChanged listener
   * @returns void
   */
  registerListener(): void {
    this.onResume();
  }

  async isAvailable(): Promise<{ status: Boolean }> {
    let status: Boolean = false;

    //Check is AmbientLightSensor available in the browser
    if ('AmbientLightSensor' in window) {
      status = true;
    }

    return {
      status: status,
    };
  }

  async getInfo(): Promise<{
    vendor: String;
    version: Number;
    type: Number;
    maxRange: Number;
    resolution: Number;
    power: Number;
    minDelay: Number;
    maxDelay: Number;
  } | void> {
    //Return dummy data as web cannot read those information
    if ('AmbientLightSensor' in window) {
      return Promise.resolve({
        vendor: 'unknown',
        version: -1,
        type: -1,
        maxRange: -1,
        resolution: -1,
        power: -1,
        minDelay: -1,
        maxDelay: -1,
      }); //Return status
    } else {
      return Promise.reject('Light sensor not available cannot get info');
    }
  }

  async init(option?: { SensorDelay: SensorManager }): Promise<void> {
    option; //Dummy used to trick the compiler

    if ('AmbientLightSensor' in window) {
      return Promise.resolve(); //Return status
    } else {
      return Promise.reject('Light sensor not available');
    }
  }
}

const LightSensor = new LightSensorWeb();

export { LightSensor };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(LightSensor);
