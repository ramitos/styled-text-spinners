```
const { Monkey } = require('../');

<div>
  <Monkey />
  <Monkey helvetica />
  <Monkey verdana />
  <Monkey monospace />
  <Monkey sansSerif />
  <Monkey serif />
</div>
```

```
const { Monkey } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Monkey /></Button>
  <Button>Loading <Monkey helvetica /></Button>
  <Button>Loading <Monkey verdana /></Button>
  <Button>Loading <Monkey monospace /></Button>
  <Button>Loading <Monkey sansSerif /></Button>
  <Button>Loading <Monkey serif /></Button>
</div>
```
