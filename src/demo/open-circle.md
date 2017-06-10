```
const { OpenCircle } = require('../');

<div>
  <OpenCircle />
  <OpenCircle helvetica />
  <OpenCircle verdana />
  <OpenCircle monospace />
  <OpenCircle sansSerif />
  <OpenCircle serif />
</div>
```

```
const { OpenCircle } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <OpenCircle /></Button>
  <Button>Loading <OpenCircle helvetica /></Button>
  <Button>Loading <OpenCircle verdana /></Button>
  <Button>Loading <OpenCircle monospace /></Button>
  <Button>Loading <OpenCircle sansSerif /></Button>
  <Button>Loading <OpenCircle serif /></Button>
</div>
```
