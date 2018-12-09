const { createInsertQuery, randomIdIf } = require('./_helper')
const faker = require('../faker')

const { objets } = require('./objets')
const { zones } = require('./zones')
const { uniqWith, isEqual, sample } = require('lodash')

const objetsZones = uniqWith([...objets.map((objet, index) => {
	return [
		index,
    zones.indexOf(sample(zones))
	]
}), ...zones.map((zone, index) => {
	return [
    objets.indexOf(sample(objets)),
		index
	]
})], isEqual)

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
