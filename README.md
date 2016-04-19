# camelizeObject

  Turn object keys into camelCased or decamelize them with a given separator

## Installation

    $ npm install --save matteo-harpoon/camelizeObject

## API

### camelizeObject(type, object, separator)

```javascript
camelizeObject("camelize", { "id": 1, "first_name": "Matteo" });
// > { "id": 1, "firstName": "Matteo" }
camelizeObject("decamelize", { "id": 1, "firstName": "Matteo" });
// > { "id": 1, "firstName": "Matteo" }
```

## License

  MIT
