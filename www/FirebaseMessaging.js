var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseMessaging";
var noop = function() {};

module.exports = {
    subscribe: function(topic) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "subscribe", [topic]);
        });
    },
    unsubscribe: function(topic) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "unsubscribe", [topic]);
        });
    },
    onTokenRefresh: function(success, error) {
        exec(success, error, PLUGIN_NAME, "onTokenRefresh", []);
    },
    onMessage: function(callack, error) {
        exec(callack, error, PLUGIN_NAME, "onMessage", []);
    },
    onBackgroundMessage: function(callack, error) {
        exec(callack, error, PLUGIN_NAME, "onBackgroundMessage", []);
    },
    revokeToken: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "revokeToken", []);
        });
    },
    getToken: function(type) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "getToken", [type]);
        });
    },
    setBadge: function(value) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setBadge", [value]);
        });
    },
    getBadge: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "getBadge", []);
        });
    },
    requestPermission: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "requestPermission", []);
        });
    }
};

document.addEventListener("deviceready", function() {
    window.FirebasePlugin = window.cordova.plugins.firebase.messaging;

    window.cordova.plugins.firebase.messaging.requestPermission().then(function() {
        console.log("Push permission granted.");
    });
}, false);
 
