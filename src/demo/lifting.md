```
const { Lifting } = require('../');

<div>
  <Lifting />
  <Lifting helvetica />
  <Lifting verdana />
  <Lifting monospace />
  <Lifting sansSerif />
  <Lifting serif />
</div>
```

```
const { Lifting } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Lifting /></Button>
  <Button>Loading <Lifting helvetica /></Button>
  <Button>Loading <Lifting verdana /></Button>
  <Button>Loading <Lifting monospace /></Button>
  <Button>Loading <Lifting sansSerif /></Button>
  <Button>Loading <Lifting serif /></Button>
</div>
```
