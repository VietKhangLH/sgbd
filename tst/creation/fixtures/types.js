const { createInsertQuery } = require('./_helper')

const types = ['Glace', 'Dragon']

module.exports = {
	types,
	generate () {
		return types
			.map((type, index) => {
				return createInsertQuery('type', [index, `'${type}'`])
			}).join('')
	}
}
