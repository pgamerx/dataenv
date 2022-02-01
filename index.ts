import { call, CLI } from "@christianjuth/ts-cli-generator";

  /** Initialise The LocalStore */
  var LocalStorage = require("node-localstorage").LocalStorage;
  let localStorage = new LocalStorage("./tmp/node-dataenv-localStorage");


/**
 * Save the data identified by the unique key.
 * @param key The Unique key to identify the data.
 * @param value The Value to save in the localStorage identified by the key.
 * @returns The value saved along with the key.
 */
function save(key: number | string, value: string | number | boolean | object) {
  if(!key || !value) return console.log("The Key and the corresponding value is required");
  const data = localStorage.getItem(key.toString());
  if (data) return console.log(`Data already exists!`);
  localStorage.setItem(key.toString(), value.toString());
  console.log(`Saving ${value} to ${key}`);
}

/**
 * Show the data identified by the unique key.
 * @param key The unique key to identify the data
 * @returns The value saved in the localStorage identified by the key.
 */
function show(key: number | string) {
  if(!key) return console.log("Key is required");
  const data = localStorage.getItem(key.toString());
  if (data) {
    console.log(`Key ${key} : ${data}`);
  } else if (!data || data === null) {
    console.log(`${key} Key does not exist`);
  }
}


/**
 * Delets a key from the localStorage
 * @param key The unique key to identify the data
 * @returns The key deleted from the localStorage.
 */
function del(key: number | string) {
  const data = localStorage.getItem(key.toString());
  if(!data) return console.log(`That Data does not exist`);
  localStorage.removeItem(key.toString());
  console.log("Removed " + key);
}

function info(){
  console.log("Developed by PGamerX");
}

export const cli: CLI = {
  save,
  show,
  del,
};
