# camelizeObject

  Turn object keys into camelCased or decamelize them with a given separator

## Installation

    $ npm install --save camelize-object-key

## API

### camelize(object)

```javascript
camelizeObjectKey.camelize({ "id": 1, "first_name": "Matteo" });
// > { "id": 1, "firstName": "Matteo" }
```

### decamelize(object, separator = "_")

```javascript
camelizeObjectKey.decamelize({ "id": 1, "firstName": "Matteo" });
// > { "id": 1, "firstName": "Matteo" }
```

## License

  MIT
