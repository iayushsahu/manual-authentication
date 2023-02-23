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
