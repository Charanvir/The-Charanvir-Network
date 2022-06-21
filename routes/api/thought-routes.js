const router = require("express").Router();
const { getAllThoughts, getThoughtById, addThought, updateThought, deleteThought } = require("../../controllers/thought-controllers");

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



module.exports = router