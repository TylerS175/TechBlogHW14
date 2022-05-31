// Creating Const 
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const Sequelizestore = require('connect-session-sequelize')(session.Store);

const helpers = require('./utils/helpers');

const sess = {
    secret: 'Super secret secret',
    cooke: {},
    resave: false,
    saveUninitialized: true,
    store: new Sequelizestore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlesbars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})
