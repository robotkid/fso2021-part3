const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

//const url =
//`mongodb+srv://user31:${password}@cluster0.dke7f.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB');
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, 'name already exists'],
        minLength: [3, 'name must be at 3 or more characters']
    },
    number: {
        type: String,
        required: true,
        validate: [v => v.replaceAll(/[^\d]/g, '').length > 8, 'number must have at least 8 digits']
    }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Person', personSchema)