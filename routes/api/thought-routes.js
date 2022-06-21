const router = require("express").Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, deleteThought, addReaction, deleteReaction } = require("../../controllers/thought-controllers");

router
    .route('/')
    .get(getAllThoughts)

router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)

router
    .route("/:thoughtId/users/:userId")
    .delete(deleteThought)

router
    .route("/:userId")
    .post(addThought)

router
    .route("/:thoughtId/reactions")
    .post(addReaction)


router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(deleteReaction)

module.exports = router