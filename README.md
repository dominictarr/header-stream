# header-stream

``` js
var header = require('header-stream')

//patch a stream so that now it has a header.
stream = header(stream)


//this will be emitted before the first 'data' event!

stream.on('header', function (meta) {
  //meta is the header.
  //also, stream.meta will be set.
  console.log(stream.meta)
})

//set header values with either of these patterns.
stream.setHeader('key1', value1)
stream.setHeader({key2: value2})

//force the header to be written.
//(othewise it will wait until the first .write()
stream.writeHead()
```

## License

MIT
