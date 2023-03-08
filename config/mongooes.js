const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1/manual_auth", { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/manual_auth');
// mongoose.set("strictQuery", false);

const db = mongoose.connection;
// error
db.on("error", console.error.bind(console, "erroe connecting to db"));
// up and running then message
db.once("open", function () {
  console.log("successfully Connected to Database:: MongoDB");
});
