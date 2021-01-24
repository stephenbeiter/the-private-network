const path = require("path");
const express = require("express");
const app = express();
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const hbs = exphbs.create({ helpers });

const cloudinary = require("cloudinary-core");
const cl = new cloudinary.Cloudinary({ cloud_name: "tpncloudinary", secure: true });

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const tpnStore = new SequelizeStore({
  db: sequelize,
});
const sess = {
  secret: "I know Kung Fu!",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: tpnStore,
};
tpnStore.sync();
app.use(session(sess));

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting static files to the public dir
app.use(express.static(path.join(__dirname, "public")));

// Setting handlebars as the default template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Now listening");
  });
});
