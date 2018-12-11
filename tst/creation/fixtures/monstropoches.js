const { createInsertQuery, randomIdIf } = require('./_helper')

const { proprietaires } = require('./proprietaires')
const { genres } = require('./genres')
const { etats } = require('./etats')
const { objets } = require('./objets')
const { especes } = require('./especes')

const monstropoches = []

module.exports = {
	monstropoches,
	generate () {
		return monstropoches.map((monstropoche, index) => {
		return createInsertQuery('monstropoche', [
				index,
				...monstropoche
			])
		}).join('')
	}
}
