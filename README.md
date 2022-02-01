# DataEnv CLI

# Instllation 
```bash
npm install -g dataenv
```

# Usage 
### Table of Contents

*   [LocalStorage][1]
*   [save][2]
    *   [Parameters][3]
*   [show][4]
    *   [Parameters][5]
*   [del][6]
    *   [Parameters][7]

## LocalStorage

Initialise The LocalStore

## npx dataenv save

Save the data identified by the unique key.

### Parameters

*   `key`  The Unique key to identify the data.
*   `value`  The Value to save in the localStorage identified by the key.

Returns **any** The value saved along with the key.

## npx dataenv show

Show the data identified by the unique key.

### Parameters

*   `key`  The unique key to identify the data

Returns **any** The value saved in the localStorage identified by the key.

## npx dataenv del

Delets a key from the localStorage

### Parameters

*   `key`  The unique key to identify the data

Returns **any** The key deleted from the localStorage.

[1]: #localstorage

[2]: #save

[3]: #parameters

[4]: #show

[5]: #parameters-1

[6]: #del

[7]: #parameters-2

## Installation
### Run CLI
```bash
  npm start
```

### Run with nodemon
```bash
  npm run dev
```

### Build
```bash
  npm run build
```

### Install CLI locally
```bash
  # (make sure you build before linking)
  npm link
  dataenv
```