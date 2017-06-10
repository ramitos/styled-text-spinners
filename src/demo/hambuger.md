```
const { Hamburger } = require('../');

<div>
  <Hamburger />
  <Hamburger helvetica />
  <Hamburger verdana />
  <Hamburger monospace />
  <Hamburger sansSerif />
  <Hamburger serif />
</div>
```

```
const { Hamburger } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Hamburger /></Button>
  <Button>Loading <Hamburger helvetica /></Button>
  <Button>Loading <Hamburger verdana /></Button>
  <Button>Loading <Hamburger monospace /></Button>
  <Button>Loading <Hamburger sansSerif /></Button>
  <Button>Loading <Hamburger serif /></Button>
</div>
```
