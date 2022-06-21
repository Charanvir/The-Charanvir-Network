const router = require("express").Router();
const { getAllThoughts, getThoughtById, addThought, updateThought } = require("../../controllers/thought-controllers");

router
    .route('/')
    .get(getAllThoughts)

router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)

router
    .route("/:userId")
    .post(addThought)



module.exports = router