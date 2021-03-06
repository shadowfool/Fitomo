const morgan = require('morgan');
const bodyParser = require('body-parser');
const jade = require('jade').__express;
const path = require('path');
const cors = require('cors');

module.exports = (app, express) => {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, '../../dist')));
  app.use(express.static(path.join(__dirname, '../../StickMan')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.engine('jade', jade);
  app.set('view engine', 'jade');
  app.set('views', path.join(__dirname, '../views'));
};
