const contactModel = require("../model/contactModel");

function contactPost(req, res) {
  const data = req.body;

  contactModel
    .create({
      fullname: data.fullName,
      emailaddress: data.emailaddress,
      phonenumber: data.phonenumber,
      message: data.message,
    })
    .then(() => {
      res.redirect("/index");
    })
    .catch((err) => {
      console.error("Contact failed:", err);
      res.redirect("/contact?error=send%20failed");
    });
}

module.exports = {
  contactPost,
};
