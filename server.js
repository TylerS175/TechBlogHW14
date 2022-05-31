// Creating Const 
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const Sequelizestore = require('connect-session-sequelize')(session.Store);
