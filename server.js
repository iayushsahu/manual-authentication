const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cookieParser = require("cookie-parser");
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongooes");

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static("./assets"));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// importing express router
app.use("/", require("./routes"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// server is up and run
app.listen(port, (err) => {
  if (err) {
    console.log(`something is happed in backend ${err}`);
  }
  console.log(`server is running on ${port}`);
});
