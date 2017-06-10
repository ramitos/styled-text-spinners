```
const { Bar } = require('../');

<div>
  <Bar />
  <Bar helvetica />
  <Bar verdana />
  <Bar monospace />
  <Bar sansSerif />
  <Bar serif />
</div>
```

```
const { Bar } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Bar /></Button>
  <Button>Loading <Bar helvetica /></Button>
  <Button>Loading <Bar verdana /></Button>
  <Button>Loading <Bar monospace /></Button>
  <Button>Loading <Bar sansSerif /></Button>
  <Button>Loading <Bar serif /></Button>
</div>
```
