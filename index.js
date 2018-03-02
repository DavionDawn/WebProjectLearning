var express = require(express);

var app = express();
app.use(expressLayouts);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.set('partials', path.join(__dirname, '/client'));
app.use(express.static(path.join(__dirname, '/client')));