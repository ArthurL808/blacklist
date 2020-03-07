const bookshelf = require('../bookshelf');

class Reason extends bookshelf.Model {

    get tableName(){
        return 'reasons';
    }

    get hasTimestamps(){
        return true;
    }

    bails(){
        return this.belongsToMany('Bail')
    }
}

module.exports = bookshelf.model("Reasons",Reason)