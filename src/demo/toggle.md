```
const { Toggle } = require('../');

<div>
  <Toggle />
  <Toggle helvetica />
  <Toggle verdana />
  <Toggle monospace />
  <Toggle sansSerif />
  <Toggle serif />
</div>
```

```
const { Toggle } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Toggle /></Button>
  <Button>Loading <Toggle helvetica /></Button>
  <Button>Loading <Toggle verdana /></Button>
  <Button>Loading <Toggle monospace /></Button>
  <Button>Loading <Toggle sansSerif /></Button>
  <Button>Loading <Toggle serif /></Button>
</div>
```
