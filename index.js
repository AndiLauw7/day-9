const exspress = require('express')

const app = exspress()
app.get('/', function(request, respone) {
    respone.send('helloworld')
})
app.listen(2000, function() {
    console.log('ini halaman home')
})