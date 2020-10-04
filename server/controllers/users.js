const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

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

exports.verifyUser = (req, res, next) => {
  const userId = req.body.userId;
  const token = req.body.webToken;
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  } catch(err) {
    err.statusCode(400)
    throw err;
  }

  if (!decodedToken) {
    res.status(403).json({ userFound: false })
  }

  req.userId = userId;
  res.status(200).json({ userFound: true })
};

exports.loginUser = (req, res, next) => {
  async function checkPassword(password, user) {
    const hashedPW = await bcrypt.hash(password, 12);
    hashedPW === user.password ? true : false;
  }

  const password = req.body.password;
  const email = req.body.email;

  const user = User.find({ email });

  if (!user) {
    res.status(404).json({ message: 'User not found.' });
  }

  if (checkPassword(password, user)) {
    const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '24hr' });
    res.status(200).json({ userFound: true, token: token });
  } else {
    res.status(403).json({ message: 'Incorrect password.' });
  }

};