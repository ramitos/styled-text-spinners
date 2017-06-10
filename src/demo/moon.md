```
const { Moon } = require('../');

<div>
  <Moon />
  <Moon helvetica />
  <Moon verdana />
  <Moon monospace />
  <Moon sansSerif />
  <Moon serif />
</div>
```

```
const { Moon } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Moon /></Button>
  <Button>Loading <Moon helvetica /></Button>
  <Button>Loading <Moon verdana /></Button>
  <Button>Loading <Moon monospace /></Button>
  <Button>Loading <Moon sansSerif /></Button>
  <Button>Loading <Moon serif /></Button>
</div>
```
