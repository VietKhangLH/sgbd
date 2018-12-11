const { createInsertQuery } = require('./_helper')

const zones = ['Bourg Palette']

module.exports = {
	zones,
	generate () {
		return zones.map((zone, index) =>
			createInsertQuery('zone', [index, `'${zone}'`])
		).join('')
	}
}