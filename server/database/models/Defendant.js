const bookshelf = require('../bookshelf')

class Defendant extends bookshelf.Model{

    get tableName(){
        return 'defendants'
    }

    get hasTimestamps() {
        return true;
    }
}

module.exports = bookshelf.model('Defendant', Defendant)