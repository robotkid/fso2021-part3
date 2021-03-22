const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validotor')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url =
    `mongodb+srv://user31:${password}@cluster0.dke7f.mongodb.net/phonebook-app?retryWrites=true&w=majority`

console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: {type:  String, required: true, unique: true },
    number: {type:  String, required: true }
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4]
    })

    person.save().then(result => {
        console.log(`Added ${person.name} number ${person.number} to phonebook`)
        mongoose.connection.close()
    })
}
else {
    console.log('Phonebook:');
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
    })
}