const mongoose = require('mongoose');

// Define a schema
const exampleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {
        timestamps: true, // Automatically manage createdAt and updatedAt fields
    }
);

// Create a model
const Example = mongoose.model('Example', exampleSchema);

module.exports = Example;