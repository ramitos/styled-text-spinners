```
const { Triangles } = require('../');

<div>
  <Triangles />
  <Triangles helvetica />
  <Triangles verdana />
  <Triangles monospace />
  <Triangles sansSerif />
  <Triangles serif />
</div>
```

```
const { Triangles } = require('../');
const Button = require('./Button').default;

<div>
  <Button>Loading <Triangles /></Button>
  <Button>Loading <Triangles helvetica /></Button>
  <Button>Loading <Triangles verdana /></Button>
  <Button>Loading <Triangles monospace /></Button>
  <Button>Loading <Triangles sansSerif /></Button>
  <Button>Loading <Triangles serif /></Button>
</div>
```
