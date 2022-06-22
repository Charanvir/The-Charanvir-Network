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
        // regex statement used to match a valid email upon user creation
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please provide a valud email!']
    },
    // references the thought model to be added to the associated user
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    // a self reference to add users to another users friend list
    friends: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
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
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;