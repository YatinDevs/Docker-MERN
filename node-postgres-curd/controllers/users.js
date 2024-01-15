const User = require("../models/users");

// CRUD Controllers

// get all Users

exports.getUsers = (req, res, next) => {
  try {
    User.findAll().then((users) => {
      res.status(200).json({ users: users });
    });
  } catch (error) {
    // console.error(error);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get User by id

exports.getUser = (req, res, next) => {
  try {
    const userId = req.params.userId;
    User.findByPk(userId).then((user) => {
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      res.status(200).json({ user: user });
    });
  } catch (error) {
    // console.error(error);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// create user

exports.createUser = (req, res, next) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    User.create({
      name: name,
      email: email,
    }).then((result) => {
      console.log("Created User Successfully!");
      res.status(201).json({
        message: "User Created Successfully!",
        user: result,
      });
    });
  } catch (error) {
    // console.error(error);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// update user

exports.updateUser = (req, res, next) => {
  try {
    const userId = req.params.userId;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
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
      });
  } catch (error) {
    // console.error(error);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// delete User

exports.deleteUser = (req, res, next) => {
  try {
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
      });
  } catch (error) {
    // console.error(error);
    // Handle the error and send an appropriate response
    res.status(500).json({ error: "Internal Server Error" });
  }
};
