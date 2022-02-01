"use strict";
exports.__esModule = true;
exports.cli = void 0;
/** Initialise The LocalStore */
var LocalStorage = require("node-localstorage").LocalStorage;
var localStorage = new LocalStorage("./tmp/node-dataenv-localStorage");
/**
 * Save the data identified by the unique key.
 * @param key The Unique key to identify the data.
 * @param value The Value to save in the localStorage identified by the key.
 * @returns The value saved along with the key.
 */
function save(key, value) {
    if (!key || !value)
        return console.log("The Key and the corresponding value is required");
    var data = localStorage.getItem(key.toString());
    if (data)
        return console.log("Data already exists!");
    localStorage.setItem(key.toString(), value.toString());
    console.log("Saving ".concat(value, " to ").concat(key));
}
/**
 * Show the data identified by the unique key.
 * @param key The unique key to identify the data
 * @returns The value saved in the localStorage identified by the key.
 */
function show(key) {
    if (!key)
        return console.log("Key is required");
    var data = localStorage.getItem(key.toString());
    if (data) {
        console.log("Key ".concat(key, " : ").concat(data));
    }
    else if (!data || data === null) {
        console.log("".concat(key, " Key does not exist"));
    }
}
/**
 * Delets a key from the localStorage
 * @param key The unique key to identify the data
 * @returns The key deleted from the localStorage.
 */
function del(key) {
    var data = localStorage.getItem(key.toString());
    if (!data)
        return console.log("That Data does not exist");
    localStorage.removeItem(key.toString());
    console.log("Removed " + key);
}
function info() {
    console.log("Developed by PGamerX");
}
exports.cli = {
    save: save,
    show: show,
    del: del
};
