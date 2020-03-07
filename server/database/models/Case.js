const bookshelf = require('../bookshelf')

class Case extends bookshelf.Model{

    get tableName(){
        return 'cases'
    }

    get hasTimestamps() {
        return true;
    }

    defendant(){
        return this.belongsTo('Defendant')
    }

    bail(){
        return this.belongsTo('Bail')
    }
}

module.exports = bookshelf.model('Case', Case)