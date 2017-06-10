```
const { Countdown } = require('../');

<div>
  <Countdown />
  <Countdown helvetica />
  <Countdown verdana />
  <Countdown monospace />
  <Countdown sansSerif />
  <Countdown serif />
</div>
```

```
const { Countdown } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Countdown /></Button>
  <Button>Loading <Countdown helvetica /></Button>
  <Button>Loading <Countdown verdana /></Button>
  <Button>Loading <Countdown monospace /></Button>
  <Button>Loading <Countdown sansSerif /></Button>
  <Button>Loading <Countdown serif /></Button>
</div>
```
