const { createInsertQuery } = require('./_helper')

const types = ['Glace', 'Dragon', 'Sol', 'Plante', 'Feu', 'Eau', 'Électrique', 'Psy', 'Spectre', 'Ténèbre', 'Fée', 'Acier', 'Poison', 'Roche', 'Combat', 'Insecte', 'Normal']

module.exports = {
	types,
	generate () {
		return types
			.map((type, index) => {
				return createInsertQuery('type', [index, `'${type}'`])
			}).join('')
	}
}
