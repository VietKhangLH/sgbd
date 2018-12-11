const { createInsertQuery } = require('./_helper')
const attaques = ['Attaque_1', 'Attaque_2']
const { types } = require('./types')

module.exports = {
	attaques,
	generate () {
		return attaques.map((attaque, index) => {
			return createInsertQuery('attaque', [
				index,
        0,
				`'${attaque}'`,
				100,
				0,
				0
				])
		}).join('')
	}
}