const { createInsertQuery } = require('./_helper')

const objets = ['Objet_1', 'Objet_2']

module.exports = {
	objets,
	generate () {
		return objets
			.map((objet, index) => createInsertQuery('objet', [
        index,
        `'${objet}'`,
        0,
        0,
        0
      ]))
			.join('')
	}
}
