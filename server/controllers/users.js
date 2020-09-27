const User = require('../models/user');
const bcrypt = require('bcryptjs');

exports.createUser = (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;

    if (password !== passwordConfirm) {

    }

    User.find({ email: email})
    .then(userDoc => {
        if (userDoc) {
            const error = new Error('A user account for this email already exists.');
            throw error;
        } else {
            bcrypt.hash(password, 10).then(hashedPW => {
                const user = new User({
                    email: email,
                    password: hashedPW,
                    name: name
                });
                if (user) {
                    return user.save().then(
                        res.status(201).json({ message: 'User created successfully.', user: user }) 
                    )
                }
            })
            .catch(err => {
                res.status(500).json({ message: 'An error occurred.'})
            })
        }
    })
}