// The singleton pattern is used in scenarios when we need exactly one instance of a class. 
// For example, we need to have an object which contains some configuration for something. 
// In these cases, it is not necessary to create a new object whenever 
// the configuration object is required somewhere in the system.

// Singleton is a manifestation of a common JavaScript pattern: the Module pattern. 

// example of lazt loading - the config data is onlt loaded to memory if it is needed
"use strict";

// IIFE
var singleton = (function() {
    // private singleton value which gets initialized only once
    var config;

    function initializeConfiguration(values, text){
        values = values || {};
        console.log(text);
        this.randomNumber = Math.random();
        this.number = values.number || 5;
        this.size = values.size || 10;
        
    }

    // we export the centralized method for retrieving the singleton value
    return {
        getConfig: function(values) {
            // we initialize the singleton value only once
            if (config === undefined) {
                config = new initializeConfiguration(values, 'test');
            }

            // and return the same config value wherever it is asked for
            return config;
        }
    };
})();

var configObject = singleton.getConfig();
var configObject = singleton.getConfig({ 'size': 8});
// prints number: 5, size: 8, randomNumber: someRandomDecimalValue
console.log(configObject);
// the 2nd execution will not change the config settings - number : 8 does nothing
var configObject1 = singleton.getConfig({ "number": 8 });
// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config
console.log(configObject1);