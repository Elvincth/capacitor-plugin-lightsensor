<p align="center"><br><img src="https://i.imgur.com/VbLeXoQ.png" width="128" height="128" /></p>
<h3 align="center">capacitor-plugin-lightsensor</h3>
<p align="center"><strong><code>capacitor-plugin-lightsensor</code></strong></p>
<p align="center">
This plugin get intensity level on the device
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

For npm:

```bash
npm install capacitor-plugin-lightsensor --save
```

For yarn:

```bash
yarn add @capacitor-community/speech-recognition
```

<b> Step 2 </b>

After install run:

```bash
npx cap sync
```

<b> Step 3 </b>

IOS Platform: No further action required.

Android Platform: Register the plugin in your main activity (MainActivity.java):

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

## Configuration

TODO

## Supported methods

| Name                | Android | iOS | Web |
| :------------------ | :------ | :-- | :-- |
| init                | ✅      | ❌  | ✅  |
| registerListener    | ✅      | ❌  | ✅  |
| unregisterListener  | ✅      | ❌  | ✅  |
| getInfo             | ✅      | ❌  | ❌  |
| isAvailable         | ✅      | ❌  | ✅  |


## Usage

TODO
