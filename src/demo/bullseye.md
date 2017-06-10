```
const { Bullseye } = require('../');

<div>
  <Bullseye />
  <Bullseye helvetica />
  <Bullseye verdana />
  <Bullseye monospace />
  <Bullseye sansSerif />
  <Bullseye serif />
</div>
```

```
const { Bullseye } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Bullseye /></Button>
  <Button>Loading <Bullseye helvetica /></Button>
  <Button>Loading <Bullseye verdana /></Button>
  <Button>Loading <Bullseye monospace /></Button>
  <Button>Loading <Bullseye sansSerif /></Button>
  <Button>Loading <Bullseye serif /></Button>
</div>
```
