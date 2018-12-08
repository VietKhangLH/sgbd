const { createInsertQuery, randomIdIf } = require('./_helper')
const faker = require('faker')
const { uniqWith, isEqual, sample } = require('lodash')

const { especes } = require('./especes')
const { zones } = require('./zones')

const especesZones = uniqWith([...especes.map((espece, index) => {
	return [
		index,
    zones.indexOf(sample(zones))
	]
}), ...zones.map((zone, index) => {
	return [
    especes.indexOf(sample(especes)),
		index
	]
})], isEqual)

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
