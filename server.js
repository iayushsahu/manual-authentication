const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// server is up and run
app.listen(port, (err) => {
  if (err) {
    console.log(`something is happed in backend ${err}`);
  }
  console.log(`server is running on ${port}`);
});
