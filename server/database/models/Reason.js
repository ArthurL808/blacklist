const bookshelf = require('../bookshelf');

class Reason extends bookshelf.Model {

    get tableName(){
        return 'reasons';
    }

    get hasTimestamps(){
        return true;
    }
}

module.exports = bookshelf.model("Reasons",Reason)