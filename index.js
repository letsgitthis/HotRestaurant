const express = require('express');

const port = 3000;
const app = express();

app.listen(port, function() {
    console.log("Server is runnig on " + port +" port")
});
