<p align="center"><br><img src="https://i.imgur.com/VbLeXoQ.png" width="128" height="128" /></p>
<h3 align="center">Capacitor Lightsensor Plugin</h3>
<p align="center"><strong><code>capacitor-plugin-lightsensor</code></strong></p>
<p align="center">
This plugin get the illuminance level on the device
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2020?style=flat-square" />
  <a href="https://github.com/capacitor-community/example/actions?query=workflow%3A%22CI%22">
  <a href="https://www.npmjs.com/package/capacitor-plugin-lightsensor"><img src="https://img.shields.io/npm/l/capacitor-plugin-lightsensor?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/capacitor-plugin-lightsensor"><img src="https://img.shields.io/npm/dw/capacitor-plugin-lightsensor?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/capacitor-plugin-lightsensor"><img src="https://img.shields.io/npm/v/capacitor-plugin-lightsensor?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-1-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer | GitHub | Social |
| -----------| -------| -------|
| Elvin Chu | [Elvincth](https://github.com/elvincth) | [@elvincth](https://twitter.com/elvincth) |

## Installation

<b> Step 1 </b>

```bash
npm install capacitor-plugin-lightsensor --save
npx cap sync
```

<b> Step 2 </b>

IOS Platform: No further action required.

<b>Android Platform: Register the plugin in your main activity (MainActivity.java):</b>

```java
import com.gren.plugin.lightsensor.LightSensor; //ADD this line

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.init(
        savedInstanceState,
        new ArrayList<Class<? extends Plugin>>() {

          {
             add(LightSensor.class); //ADD this line
          }
        }
      );
  }
}
```

<!-- ## Configuration TODO -->



## Supported methods

| Name                | Android | iOS | Web |
| :------------------ | :------ | :-- | :-- |
| init                | ✅      | ❌  | ✅  |
| registerListener    | ✅      | ❌  | ✅  |
| unregisterListener  | ✅      | ❌  | ✅  |
| getInfo             | ✅      | ❌  | ❌  |
| isAvailable         | ✅      | ❌  | ✅  |


## Usage

### Getting illuminance level
<a id="Gettingilluminancelevel"></a>
```javascript
import { SensorManager } from "capacitor-plugin-lightsensor";
import { Plugins } from "@capacitor/core"; 
const { LightSensor } = Plugins;

async function getLux() {
  try {
    //Initialize the sensor with some settings
    await LightSensor.init({
      SensorDelay: SensorManager.SENSOR_DELAY_UI, //Optional for android only Default is SENSOR_DELAY_NORMAL
    });

    //Register onLightSensorChanged listener
    LightSensor.registerListener();

    //Listen for the sensor change
    window.addEventListener("onLightSensorChanged", (evt) => {
      console.log("value", evt.value); //The illuminance (lux) level 
      console.log("accuracy", evt.accuracy); //Android only the accuracy of this event, for web return -1
      console.log("timestamp", evt.timestamp); //For android in nanoseconds, For web in millisecond
      
      console.log("onLightSensorChanged", JSON.stringify(evt));  
      //{"isTrusted":false,"accuracy":3,"timestamp":58769305913765,"value":281.9115905761719}
    });

  } catch (error) {
    console.log("Light sensor not available");
  }
}
```
### Check the availability of light sensor 
```javascript
import { SensorManager } from "capacitor-plugin-lightsensor";
import { Plugins } from "@capacitor/core"; 
const { LightSensor } = Plugins;

async function checkSensor() {
  const isSensorAvailable = await LightSensor.isAvailable();

  if (isSensorAvailable.status) {
    console.log("There is light sensor in this device");
  } else {
    console.log("No light sensor in this device");
  }
  
  console.log("isSensorAvailable", JSON.stringify(isSensorAvailable)); // {"status":true} or {"status":false}
}

```

### Getting the light sensor information (Android ONLY)
```javascript
import { SensorManager } from "capacitor-plugin-lightsensor";
import { Plugins } from "@capacitor/core"; 
const { LightSensor } = Plugins;

//See more in https://developer.android.com/reference/android/hardware/Sensor#getVendor()
async function getInfo() {
  try {
    const sensorInfo = await LightSensor.getInfo();

    //For android only, if web all number will return -1
    
    console.log("vendor", sensorInfo.vendor); //vendor string of this sensor
    console.log("version", sensorInfo.version); //version of the sensor's module
    console.log("type", sensorInfo.type); //generic type of this sensor
    console.log("maxRange", sensorInfo.maxRange); //maximum range of the sensor in the sensor's unit.
    console.log("resolution", sensorInfo.resolution); //resolution of the sensor in the sensor's unit.
    console.log("power", sensorInfo.power); //the power in mA used by this sensor while in use
    console.log("minDelay", sensorInfo.minDelay); //the minimum delay allowed between two events in microsecond or zero if this sensor only returns a value when the data it's measuring changes.
    console.log("minDelay", sensorInfo.maxDelay); //The max delay for this sensor in microseconds.

    console.log("sensorInfo", JSON.stringify(sensorInfo));
    //{"vendor":"OnePlus","version":1,"type":5,"maxRange":4096,"resolution":1,"power":1.7049999237060547,"minDelay":0,"maxDelay":0}
  } catch (error) {
    console.log("Light sensor not available");
  }
}
```


## API

### Methods

#### init(...)

Initialize the light sensor with settings (See example [here](#Gettingilluminancelevel) )

| Param   | Type    | Description                                        |
|---------|---------|----------------------------------------------------|
| **`option`**   | `object`  | <code><a href="#init">See option table</a></code>  |


**Returns:** <code>Promise</code>

<br>

#### registerListener()

Register [onLightSensorChanged listener](#onLightSensorChanged) (Start or resume the sensor)

<br>

#### unregisterListener()

Unregister [onLightSensorChanged listener](#onLightSensorChanged)  (Stop or pause the sensor)

<br>

#### getInfo()

Unregister [onLightSensorChanged listener](#onLightSensorChanged)  (Stop or pause the sensor)

<br>


### Events
#### onLightSensorChanged 




### Enums

#### SensorManager 
<p> (For android only, see more in: https://developer.android.com/reference/android/hardware/SensorManager#SENSOR_DELAY_FASTEST ) </p>
<!-- https://www.tablesgenerator.com/markdown_tables -->

| Members              | Value | Description                                   |
|----------------------|-------|-----------------------------------------------|
| SENSOR_DELAY_FASTEST | 0     | Get sensor data as fast as possible           |
| SENSOR_DELAY_GAME    | 1     | Rate suitable for games                       |
| SENSOR_DELAY_UI      | 2     | Rate suitable for the user interface          |
| SENSOR_DELAY_NORMAL  | 3     | Normal rate (Default)                         |

