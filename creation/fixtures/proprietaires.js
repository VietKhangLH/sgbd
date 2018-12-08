const faker = require('faker/locale/fr')
const { createInsertQuery } = require('./_helper')
const { uniq } = require('lodash')

const proprietaires = uniq(Array.from(
	{ length: 100 },
	() => faker.name.findName()))

module.exports = {
	proprietaires,
	generate () {
		return proprietaires.map((proprietaire, index) => {
			return createInsertQuery('proprietaire', [index, `'${proprietaire}'`])
		})
		.join('')
	}
}
