const bookshelf = require('../bookshelf')

class BailReason extends bookshelf.Model{

    get tableName(){
        return 'bails_reasons'
    }

    get hasTimestamps() {
        return true;
    }
}

module.exports = bookshelf.model('BailReason', BailReason)