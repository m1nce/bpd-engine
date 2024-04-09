const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the query collection
const querySchema = new Schema({
    // Type of query; basic, advanced, etc.
    class: {
        type: String,
        required: true
    },
    // Function being shown
    function: {
        type: String,
        required: true
    },
    // Inputs to the function
    input: {
        type: String,
        required: true
    },
    // Expected output of the function
    output: {
        type: String, 
        required: true
    },
    // Example of the function being used
    example: {
        type: String,
        required: true
    },
    // Result of the example
    example_result: {
        type: Object,
        required: false
    }
})

// Create a model for the query collection
const Query = mongoose.model('Query', querySchema);

// Export the model
module.exports = Query;