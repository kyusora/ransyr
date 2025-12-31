# ransyr

![npm version](https://img.shields.io/npm/v/ransyr?color=blue&label=npm%20version) ![license](https://img.shields.io/npm/l/ransyr) ![downloads](https://img.shields.io/npm/dt/ransyr)

Python-like random utilities for JavaScript, designed to make your life easier 😎

---

## Description

`ransyr` dibuat untuk mempermudah penggunaan random di JavaScript, **meniru gaya Python**.  
Daripada harus menulis:

```javascript
const choice = arr[Math.floor(Math.random() * arr.length)];
```

## Contoh Penggunaan

```javascript
import random from 'ransyr';

const arr = ["apple", "banana", "cherry"];
console.log(random.choice(arr));
console.log(random.random());
```