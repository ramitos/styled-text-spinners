```
const { Fish } = require('../');

<div>
  <Fish />
  <Fish helvetica />
  <Fish verdana />
  <Fish monospace />
  <Fish sansSerif />
  <Fish serif />
</div>
```

```
const { Fish } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Fish /></Button>
  <Button>Loading <Fish helvetica /></Button>
  <Button>Loading <Fish verdana /></Button>
  <Button>Loading <Fish monospace /></Button>
  <Button>Loading <Fish sansSerif /></Button>
  <Button>Loading <Fish serif /></Button>
</div>
```
