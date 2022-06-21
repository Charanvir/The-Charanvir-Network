const { User, Thought } = require("../models")

const thoughtController = {
    // view a thought
    getAllThoughts(req, res) {
        Thought.find({})
            .select("-__v")
            .then(dbThoughtData => res.json(dbThoughtData))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    // get a single thought
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .select("-__v")
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No Thought found with this ID" })
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    // add a thought
    addThought({ params, body }, res) {
        User.findOne({ _id: params.userId })
            .then(userData => {
                Thought.create({
                    username: userData.user,
                    thoughtText: body.thoughtText
                })
                    .then(({ _id }) => {
                        return User.findOneAndUpdate(
                            { _id: params.userId },
                            { $push: { thoughts: _id } },
                            { new: true }
                        )
                    })
                    .then(dbThoughtData => {
                        if (!dbThoughtData) {
                            res.status(404).json({ message: "No User found with this ID!" })
                            return;
                        }
                        res.json(dbThoughtData)
                    })
                    .catch(err => res.json(err))
            })
    },

    // update a thought
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.id },
            body,
            { new: true, runValidators: true }
        )
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: "No Thought found with this Data!" });
                    return;
                }
                res.json(dbThoughtData)
            })
            .catch(err => res.status(400).json(err))
    }
}

module.exports = thoughtController