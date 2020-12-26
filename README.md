<p align="center"><br><img src="https://i.imgur.com/VbLeXoQ.png" width="128" height="128" /></p>
<h3 align="center">capacitor-plugin-lightsensor</h3>
<p align="center"><strong><code>@capacitor-community/example</code></strong></p>
<p align="center">
This plugin get intensity level on the device
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2020?style=flat-square" />
  <a href="https://github.com/capacitor-community/example/actions?query=workflow%3A%22CI%22"><img src="https://img.shields.io/github/workflow/status/capacitor-community/example/CI?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/capacitor-plugin-lightsensor"><img src="https://img.shields.io/npm/l/@capacitor-community/example?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@capacitor-community/example"><img src="https://img.shields.io/npm/dw/@capacitor-community/example?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/example"><img src="https://img.shields.io/npm/v/@capacitor-community/example?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-0-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer | GitHub | Social |
| -----------| -------| -------|
| Elvin Chu | [Elvincth](https://github.com/elvincth) | [@elvincth](https://twitter.com/elvincth) |

## Installation


For npm:

```bash
npm install @capacitor-community/speech-recognition
```

For yarn:

```bash
yarn add @capacitor-community/speech-recognition
```

After install run:

```bash
npx cap sync
```

iOS Platform: No further action required.

Android Platform: Register the plugin in your main activity(MainActivity.java):

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
