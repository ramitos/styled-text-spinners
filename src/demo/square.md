```
const { Square } = require('../');

<div>
  <Square />
  <Square helvetica />
  <Square verdana />
  <Square monospace />
  <Square sansSerif />
  <Square serif />
</div>
```

```
const { Square } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Square /></Button>
  <Button>Loading <Square helvetica /></Button>
  <Button>Loading <Square verdana /></Button>
  <Button>Loading <Square monospace /></Button>
  <Button>Loading <Square sansSerif /></Button>
  <Button>Loading <Square serif /></Button>
</div>
```
