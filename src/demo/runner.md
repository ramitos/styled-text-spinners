```
const { Runner } = require('../');

<div>
  <Runner />
  <Runner helvetica />
  <Runner verdana />
  <Runner monospace />
  <Runner sansSerif />
  <Runner serif />
</div>
```

```
const { Runner } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Runner /></Button>
  <Button>Loading <Runner helvetica /></Button>
  <Button>Loading <Runner verdana /></Button>
  <Button>Loading <Runner monospace /></Button>
  <Button>Loading <Runner sansSerif /></Button>
  <Button>Loading <Runner serif /></Button>
</div>
```
