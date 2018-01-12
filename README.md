# json level

Calculate the given JSON object's depth.

## Example

```javascript
  import jsonLevel from 'json-level';

  const emptyObj = {};
  const level1 = { a: 1 };
  const level2 = { b: level1 };
  const level3 = { c: level2 };

  console.log(jsonLevel(emptyObj)); // return 1
  console.log(jsonLevel(level1)); // return 1
  console.log(jsonLevel(level2)); // return 2
  console.log(jsonLevel(level3)); // return 3
```