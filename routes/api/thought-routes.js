const router = require("express").Router();
const { getAllThoughts, getThoughtById, addThought, addThoughtV2 } = require("../../controllers/thought-controllers");

router
    .route('/')
    .get(getAllThoughts)

router
    .route("/:id")
    .get(getThoughtById)

router
    .route("/:userId")
    .post(addThoughtV2)



module.exports = router