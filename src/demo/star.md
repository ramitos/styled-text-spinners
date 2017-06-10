```
const { Star } = require('../');

<div>
  <Star />
  <Star helvetica />
  <Star verdana />
  <Star monospace />
  <Star sansSerif />
  <Star serif />
</div>
```

```
const { Star } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Star /></Button>
  <Button>Loading <Star helvetica /></Button>
  <Button>Loading <Star verdana /></Button>
  <Button>Loading <Star monospace /></Button>
  <Button>Loading <Star sansSerif /></Button>
  <Button>Loading <Star serif /></Button>
</div>
```
