const { createInsertQuery } = require('./_helper')

const { objets } = require('./objets')
const { zones } = require('./zones')

const objetsZones = []

module.exports = {
	objetsZones,
	generate () {
		return objetsZones.map(relation => {
			return createInsertQuery('objet_zone', [
				...relation
				])
		}).join('')
	}
}
