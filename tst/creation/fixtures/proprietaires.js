const { createInsertQuery } = require('./_helper')

const proprietaires = []

module.exports = {
	proprietaires,
	generate () {
		return proprietaires.map((proprietaire, index) => {
			return createInsertQuery('proprietaire', [index, `'${proprietaire}'`])
		})
		.join('')
	}
}
