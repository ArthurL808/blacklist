const bookshelf = require('../bookshelf')

class Gender extends bookshelf.Model{

    get tableName(){
        return 'genders'
    }

    get hasTimestamps() {
        return true;
    }
}

module.exports = bookshelf.model('Gender', Gender)