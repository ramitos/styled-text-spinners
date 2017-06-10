```
const { Bullet } = require('../');

<div>
  <Bullet />
  <Bullet helvetica />
  <Bullet verdana />
  <Bullet monospace />
  <Bullet sansSerif />
  <Bullet serif />
</div>
```

```
const { Bullet } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Bullet /></Button>
  <Button>Loading <Bullet helvetica /></Button>
  <Button>Loading <Bullet verdana /></Button>
  <Button>Loading <Bullet monospace /></Button>
  <Button>Loading <Bullet sansSerif /></Button>
  <Button>Loading <Bullet serif /></Button>
</div>
```
