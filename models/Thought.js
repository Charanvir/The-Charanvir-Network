const { Schema, model, Types } = require("mongoose");
const formatedDate = require("../utils/formatedDate")

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: "Reaction Text is required!",
            maxlength: 280
        },
        username: {
            type: String,
            required: "Username is required!"
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtValue => formatedDate(createdAtValue)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: "Thought Text is required!",
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtValue => formatedDate(createdAtValue)
        },
        username: {
            type: String,
            required: "Username is required to leave a thought!"
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
});

const Thought = model("Thought", ThoughtSchema)

module.exports = Thought