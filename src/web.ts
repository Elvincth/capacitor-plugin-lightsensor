import { WebPlugin } from '@capacitor/core';
import { LightSensorPlugin, SensorManager } from './definitions';

export class LightSensorWeb extends WebPlugin implements LightSensorPlugin {
  isPause: Boolean = false;

  constructor() {
    super({
      name: 'LightSensor',
      platforms: ['web'],
    });
  }

  //Used to register the listner
  protected onResume(): void {
    // var evt = new CustomEvent('printerstatechanged', { detail: state });
    // window.dispatchEvent(evt);
  }

  unregisterListener(): void {
    this.isPause = true;
  }

  registerListener(): void {
    // var evt = new CustomEvent('printerstatechanged', { detail: state });

    // window.dispatchEvent(evt);

    this.isPause = true;
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
  }> {
    //Return dummy data as web cannot read those information
    return {
      vendor: 'unknown',
      version: -1,
      type: -1,
      maxRange: -1,
      resolution: -1,
      power: -1,
      minDelay: -1,
      maxDelay: -1,
    };
  }

  async init(option?: { SensorDelay: SensorManager }): Promise<void> {
    // let lux = 0;

    option;

    // window.addEventListener('devicelight', function (event) {
    //   lux = event.value;
    // });

    // if (!this.isPause) {
    //   return {
    //     data: {
    //       value: lux,
    //     },
    //   };
    // }
  }
}

const LightSensor = new LightSensorWeb();

export { LightSensor };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(LightSensor);
