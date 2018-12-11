const { createInsertQuery, randomIdIf } = require('./_helper')

const { especes } = require('./especes')
const { zones } = require('./zones')

const especesZones = []

module.exports = {
	especesZones,
	generate () {
		return especesZones.map(relation => {
			return createInsertQuery('espece_zone', [
				...relation
				])
		}).join('')
	}
}
