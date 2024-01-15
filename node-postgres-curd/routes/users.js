const controller = require("../controllers/users");
const router = require("express").Router();

// CRUD Routes / users

router.get("/", controller.getUsers); // users
router.get("/:userId", controller.getUser); // users
router.post("/", controller.createUser); // users
router.put("/:userId", controller.updateUser); // users
router.delete("/:userId", controller.deleteUser); // users
