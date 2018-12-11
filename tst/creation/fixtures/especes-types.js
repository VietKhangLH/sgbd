const { createInsertQuery, randomIdIf } = require('./_helper')
const faker = require('../faker')
const { uniqWith, isEqual, sample } = require('lodash')

const { especes } = require('./especes')
const { types } = require('./types')

const especesTypes = uniqWith([...especes.map((espece, index) => {
	return [
		index,
    types.indexOf(sample(types))
	]
}), ...types.map((type, index) => {
	return [
    especes.indexOf(sample(especes)),
		index
	]
})], isEqual)

module.exports = {
	especesTypes,
	generate () {
		return especesTypes.map(relation => {
			return createInsertQuery('espece_type', [
				...relation
				])
		}).join('')
	}
}
