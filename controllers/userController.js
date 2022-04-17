const User = require("../models/User");
const sendEmailCreationEmail = require("../mail/sendAccountCreationEmail");

exports.create = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.create({
      name,
      email,
    });

    await sendEmailCreationEmail({ name, email });

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
