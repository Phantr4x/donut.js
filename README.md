# donut.js

Another local-storage solution.

🍩 🍩 🍩 => oOo

## Usage

### Browser
```html
<script type="text/javascript" src="path/to/donut.js"></script>
<script type="text/javascript">
  // ...Code here whatever you like
</script>
```
### Node
```javascript
var oOo = require('donut.js');
// ...Code here whatever you like
```

## API

### `oOo.cookie` [ or `donut.cookie` ]

#### `get(key)`

```javascript
oOo.cookie.get('key'); // { String } Cookie key name
```

#### `getAll()`

```javascript
oOo.cookie.getAll();
```

#### `set(key, value, options)`

```javascript
oOo.cookie.set('key', 'value', { // { String } Cookie key name and value
  expires:  1,                   // { Number } Expires hours
  domain:   'example.com',       // { String } Domain
  path:     '/path/to/...',      // { String } Path
  secure:   false,               // { Boolean } Secure
  httpOnly: false                // { Boolean } HttpOnly
});
```

#### `remove(key)`

```javascript
oOo.cookie.remove('key'); // { String } Cookie key name
```

#### `removeAll()`

```javascript
oOo.cookie.removeAll();
```

## License

**donut.js** © Phantr4x, Released under the [MIT](https://github.com/Phantr4x/donut.js/blob/master/LICENSE) License.

Authored and maintained by Phantr4x