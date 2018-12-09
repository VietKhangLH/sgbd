const faker = require('../faker')
const { createInsertQuery } = require('./_helper')
const { uniq } = require('lodash')

const zones = uniq(Array.from(
	{ length: 100 },
	() => faker.address.country()))

module.exports = {
	zones,
	generate () {
		return zones.map((zone, index) =>
			createInsertQuery('zone', [index, `'${zone}'`])
		).join('')
	}
}