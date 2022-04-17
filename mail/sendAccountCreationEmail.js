const ejs = require("ejs");
const path = require("path");
const transporter = require("./transporter");

const sendEmailCreationEmail = async ({ name, email }) => {
  const requiredPath = path.join(__dirname, "../views/AccountCreated.ejs");

  const data = await ejs.renderFile(requiredPath, {
    name: name,
  });

  var mainOptions = {
    from: '"Suman Kumar" suman.kalia235@gmail.com',
    to: email,
    subject: "Account Activated",
    html: data,
  };

  await transporter.sendMail(mainOptions);
};

module.exports = sendEmailCreationEmail;
