# myRequire()
Simple custom require() to simulate NodeJs in-built require() function


```javascipt
// *Note : You need to import the customRequire.js module firest using nodejs inbuilt require() method.
const customRequire = require("./customRequire");
```

```javascript
// module.js for sample
exports.sayHi = name => console.log(`Hi, ${name}`);
```

```javascript
// main.js
const { sayHi } = customRequire("./module.js");
sayHi("Saikat");
```