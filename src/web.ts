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

  unregisterListener(): void {
    this.isPause = true;
  }

  registerListener(): void {
    this.isPause = true;
  }

  async isAvailable(): Promise<{ status: Boolean }> {
    return {
      status: false, //Dummy data
    };
  }

  async getInfo(): Promise<{
    vendor: Number;
    version: Number;
    type: Number;
    maxRange: Number;
    resolution: Number;
    power: Number;
    minDelay: Number;
    maxDelay: Number;
  } | void> {}

  async init(option?: { SensorDelay: SensorManager }):  Promise<void> {
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
