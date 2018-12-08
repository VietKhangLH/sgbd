const { createInsertQuery } = require('./_helper')

const etats = ['Mission', 'Repos', 'Reproduction']

module.exports = {
	etats,
	generate () {
		return etats
			.map((etat, index) => {
				return createInsertQuery('etat', [index, `'${etat}'`])
			}).join('')
	}
}
