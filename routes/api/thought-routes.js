const router = require("express").Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controllers/thought-controllers");

// root endpoint to get all thoughts
router
    .route('/')
    .get(getAllThoughts)

// uses the id parameter to get a single thought, or update that thought
router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)

// uses the thoughtId and userId in the params to delete a thought and update the user model associated with the deleted thought
router
    .route("/:thoughtId/users/:userId")
    .delete(deleteThought)

// uses the userID parameter to create a thought and associate it with an existing user
router
    .route("/:userId")
    .post(addThought)

// uses the thoughtId to create a reaction to the thought that is being referenced
router
    .route("/:thoughtId/reactions")
    .post(addReaction)

// uses both the thoughtId and reactionId to delete a thought and update the associated thought
router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction)

module.exports = router