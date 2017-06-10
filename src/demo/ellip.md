```
const { Ellip } = require('../');

<div>
  <Ellip />
  <Ellip helvetica />
  <Ellip verdana />
  <Ellip monospace />
  <Ellip sansSerif />
  <Ellip serif />
</div>
```

```
const { Ellip } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Ellip /></Button>
  <Button>Loading <Ellip helvetica /></Button>
  <Button>Loading <Ellip verdana /></Button>
  <Button>Loading <Ellip monospace /></Button>
  <Button>Loading <Ellip sansSerif /></Button>
  <Button>Loading <Ellip serif /></Button>
</div>
```
