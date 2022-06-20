const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    user: {
        type: String,
        unique: true,
        required: 'You need to provide a username!',
        trim: true
    },
    email: {
        type: String,
        required: "You must provide an email!",
        unique: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please provide a valud email!']
    },
    thoughts: [{
        // array of _id values referencing the Thought model
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
    // array of _id values referncing the User model (self-reference)

},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// virtual called friendCount that retrives the length of the user's friend array field on query
UserSchema.virtual('fiendCount').get(function () {
    return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;