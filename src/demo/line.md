```
const { Line } = require('../');

<div>
  <Line />
  <Line helvetica />
  <Line verdana />
  <Line monospace />
  <Line sansSerif />
  <Line serif />
</div>
```

```
const { Line } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Line /></Button>
  <Button>Loading <Line helvetica /></Button>
  <Button>Loading <Line verdana /></Button>
  <Button>Loading <Line monospace /></Button>
  <Button>Loading <Line sansSerif /></Button>
  <Button>Loading <Line serif /></Button>
</div>
```
