const { createInsertQuery, randomIdIf } = require('./_helper')

const especes = [`Espece_1`, `Espece_2`]
const { objets } = require('./objets')

module.exports = {
	especes,
	generate () {
		return especes.map((espece, index) => {
			return createInsertQuery('espece', [
				index,
				0,
			  0,
				// les espèces après index n'existent pas encore
				`'${espece}'`
				])
		}).join('')
	}
}
