const { createInsertQuery } = require('./_helper')

const { monstropoches } = require('./monstropoches')
const { attaques } = require('./attaques')

const monstropochesAttaques = []

module.exports = {
	monstropochesAttaques,
	generate () {
		return monstropochesAttaques.map(relation => {
			return createInsertQuery('monstropoche_attaque', [
				...relation
				])
		}).join('')
	}
}
