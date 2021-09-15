const express = require("express");
const app = express();

const port = 5000;

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
    res.render('box.html');
})

app.listen(port, () => {
    console.log('Listing on port - ' + port);
});