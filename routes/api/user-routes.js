const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require("../../controllers/user-controllers");

// using the root user endpoint to get all users or create a new user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// uses the id parameter to get, update or delete a specific user
router
    .route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// uses the users id and friends id parameter to add a user to another users friendList or remove
router
    .route("/:id/friends/:friendId")
    .post(addFriend)
    .delete(removeFriend)

module.exports = router