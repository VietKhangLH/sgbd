const { createInsertQuery, randomIdIf } = require('./_helper')

const { especes } = require('./especes')
const { types } = require('./types')

const especesTypes = []

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
