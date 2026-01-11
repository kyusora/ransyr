# ransyr

![npm version](https://img.shields.io/npm/v/ransyr?color=blue&label=npm%20version) ![license](https://img.shields.io/npm/l/ransyr) ![downloads](https://img.shields.io/npm/dt/ransyr)

Python-like random utilities for JavaScript, designed to make your life easier 😎

---

## Description

`ransyr` is a random tools that **imitate python style**.  

## You Can Use Custom Seed

```typescript
randx.randomseed(27382: number)
console.log(randx.random())
```

## Usage Example

```javascript
import randx from 'ransyr';

const arr = ["apple", "banana", "cherry"];
console.log(randx.choice(arr));
console.log(randx.random());
```