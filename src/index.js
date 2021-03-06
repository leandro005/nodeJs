const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

//Middleware

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'appSecreta',
    resave: true,
    saveUninitialized: true
}));

//Global Variables

//Routes

//Static Files

//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

/*console.log('Hola Mundooo, tu SO:',os.platform());
console.log(os.release());
console.log('Free MEM',os.freemem());
console.log('Free MEM',os.totalmem());
*/
