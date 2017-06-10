```
const { BoxBounce } = require('../');

<div>
  <BoxBounce />
  <BoxBounce helvetica />
  <BoxBounce verdana />
  <BoxBounce monospace />
  <BoxBounce sansSerif />
  <BoxBounce serif />
</div>
```

```
const { BoxBounce } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <BoxBounce /></Button>
  <Button>Loading <BoxBounce helvetica /></Button>
  <Button>Loading <BoxBounce verdana /></Button>
  <Button>Loading <BoxBounce monospace /></Button>
  <Button>Loading <BoxBounce sansSerif /></Button>
  <Button>Loading <BoxBounce serif /></Button>
</div>
```
