const User = require("../models/user");

module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "user profile",
  });
};

module.exports.signIn = function (req, res) {
  return res.render("user_sign_in", {
    title: "user | sign in",
  });
};

module.exports.signUp = function (req, res) {
  return res.render("user_sign_up", {
    title: "user | sign up",
  });
};

module.exports.signOut = function (req, res) {
  //todo-later
};

module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("error in finding user in signing up");
      return;
    }

    if (!user) {
      User.create(req.body, (err, user) => {
        if (err) {
          console.log("error in finding user in signing up");
          return;
        }

        return res.redirect("/users/sign-in");
      });
    } else {
      return res.redirect("back");
    }
  });
};

module.exports.createSession = function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log(`error in finding user in signing in`);
      return res.redirect("back");
    }
    // handel user found
    if (user) {
      // handle password match or not
      if (user.password != req.body.password) {
        return res.redirect("back");
      }

      // handle create session
      res.cookie("user_id", user.id);
      return res.redirect("users/profile");
    } else {
      // handel user not found
      return res.redirect("back");
    }
  });
};
