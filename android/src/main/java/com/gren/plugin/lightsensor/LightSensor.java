package com.gren.plugin.lightsensor;

import android.content.Context;
import android.hardware.Sensor;
import android.hardware.SensorEvent;
import android.hardware.SensorEventListener;
import android.hardware.SensorManager;
import android.os.Build;
import android.util.Log;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import org.json.JSONException;
import org.json.JSONObject;

@NativePlugin
public class LightSensor extends Plugin implements SensorEventListener {
    private SensorManager sensorManager;
    private Sensor mLight;
    private float lux = 0; //Store readings value
    private int delayMode = 0; //Store sensor delay setting value possible values 0,1,2,3


    @PluginMethod
    public void init(PluginCall call) {
        //Get settings value from passed init method
        int SensorDelay = call.getInt("SensorDelay", 0);
        delayMode = SensorDelay; //Set the delay mode

        JSObject status = new JSObject();
        status.put("status", true);

        //init sensors
        if (isSensorAvailable()) {
            sensorManager = (SensorManager) this.getContext().getSystemService(Context.SENSOR_SERVICE);
            mLight = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT);
            call.resolve(status); //succeeding corresponds to calling resolve on the Promise
            Log.d("LightSensor", "Loaded");
        } else {
            call.reject("Light sensor not available");
            Log.d("LightSensor", "No sensor");
        }


        //Just some logging
        Log.d("Settings:", Integer.toString(SensorDelay));
    }


    @PluginMethod
    public void unregisterListener(PluginCall call) {
        onPause();
    }

    @PluginMethod
    public void registerListener(PluginCall call) {
        onResume(); //Register sensor
    }

    //Check is light sensor available
    @PluginMethod
    public void isAvailable(PluginCall call) {
        JSObject status = new JSObject();

        if (isSensorAvailable()) {
            status.put("status", true);
        } else {
            status.put("status", false);
        }

        call.resolve(status);
    }


    //Return sensor information
    @PluginMethod
    public void getInfo(PluginCall call) {

        if (isSensorAvailable()) {
            JSObject sensorObj = new JSObject(); //Sensor obj
            //For sensor info

            sensorObj.put("vendor", mLight.getVendor()); //String
            sensorObj.put("version", mLight.getVersion());//Int
            sensorObj.put("type", mLight.getType());//Number
            sensorObj.put("maxRange", mLight.getMaximumRange());//Number
            sensorObj.put("resolution", mLight.getResolution());//Number
            sensorObj.put("power", mLight.getPower());//Number
            sensorObj.put("minDelay", mLight.getMinDelay());//Number
            sensorObj.put("maxDelay", mLight.getMaxDelay());//Number
            call.resolve(sensorObj); //succeeding corresponds to calling resolve on the Promise
        } else {
            call.reject("Light sensor not available");
            Log.d("LightSensor", "No sensor");
        }

    }

    //Used to check is sensor available
    private boolean isSensorAvailable() {
        sensorManager = (SensorManager) this.getContext().getSystemService(Context.SENSOR_SERVICE);
        if (sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT) != null) {
            return true;
        } else {
            return false;     // Failure! No sensor.
        }
    }

    //Used to resume or start
    protected void onResume() {
            sensorManager.registerListener(this, mLight, SensorManager.SENSOR_DELAY_FASTEST);
       }

    //Used to pause the sensor
    protected void onPause() {
        sensorManager.unregisterListener(this);
    }

    @Override
    public final void onSensorChanged(SensorEvent event) {
        lux = event.values[0]; //Update lux

        JSObject evtObj = new JSObject(); //Event obj for js

        evtObj.put("accuracy", event.accuracy);
        evtObj.put("timestamp", event.timestamp);
        evtObj.put("value", event.values[0]);

        //Trigger js event onSensorChanged
        bridge.triggerWindowJSEvent("onLightSensorChanged", "" + evtObj);
        Log.d("Value:", Float.toString(lux));
    }

    @Override
    public void onAccuracyChanged(Sensor sensor, int accuracy) {

    }


}
