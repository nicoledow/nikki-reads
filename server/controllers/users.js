const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.createUser = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  let user;
console.log(req.body)
  
  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res
      .status(400)
      .json({
        status: 400,
        message: "A user with this email is already registered.",
      });
  }

  bcrypt.hash(password, 12).then(hashedPW => {
       user = new User({ password: hashedPW, name: name, email: email});
       console.log('created user, going to save')
      return user.save();
  })
  .then(result => {
      console.log('userid', user._id.toString())
      res.status(201).json({ message: 'User created.', userId: user._id.toString() });
  })
  .catch(err => console.log('err', err))
};
