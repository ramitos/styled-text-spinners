```
const { Circle } = require('../');

<div>
  <Circle />
  <Circle helvetica />
  <Circle verdana />
  <Circle monospace />
  <Circle sansSerif />
  <Circle serif />
</div>
```

```
const { Circle } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Circle /></Button>
  <Button>Loading <Circle helvetica /></Button>
  <Button>Loading <Circle verdana /></Button>
  <Button>Loading <Circle monospace /></Button>
  <Button>Loading <Circle sansSerif /></Button>
  <Button>Loading <Circle serif /></Button>
</div>
```
