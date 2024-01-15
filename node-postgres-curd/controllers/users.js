const User = require("../models/users");

// CRUD Controllers

// get all Users

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => console.log(err));
};

// get User by id

exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      res.status(200).json({ user: user });
    })
    .catch((err) => console.log(err));
};

// create user

exports.createUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  User.create({
    name: name,
    email: email,
  }).then((result) => {
    console.log("Created User Successfully!");
    res
      .status(201)
      .json({
        message: "User Created Successfully!",
        user: result,
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

// update user

exports.updateUser = (req, res, next) => {
  const userId = req.params.userId;
  const updatedName = req.params.name;
  const updatedEmail = req.params.email;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      user.name = updatedName;
      user.email = updatedEmail;
      return user.save();
    })
    .then((result) => {
      res.status(200).json({ message: "User Updatedd!", user: result });
    })
    .catch((err) => console.log(err));
};

// delete User

exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      return User.destroy({
        where: {
          id: userId,
        },
      });
    })
    .then((result) => {
      res.status(200).json({ message: "User Deleted!", user: result });
    })
    .catch((err) => console.log(err));
};
