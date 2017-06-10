```
const { Bar2 } = require('../');

<div>
  <Bar2 />
  <Bar2 helvetica />
  <Bar2 verdana />
  <Bar2 monospace />
  <Bar2 sansSerif />
  <Bar2 serif />
</div>
```

```
const { Bar2 } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Bar2 /></Button>
  <Button>Loading <Bar2 helvetica /></Button>
  <Button>Loading <Bar2 verdana /></Button>
  <Button>Loading <Bar2 monospace /></Button>
  <Button>Loading <Bar2 sansSerif /></Button>
  <Button>Loading <Bar2 serif /></Button>
</div>
```
