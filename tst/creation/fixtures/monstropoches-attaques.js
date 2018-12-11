const { createInsertQuery, randomIdIf } = require('./_helper')
const faker = require('../faker')
const { uniqWith, isEqual, sample } = require('lodash')

const { monstropoches } = require('./monstropoches')
const { attaques } = require('./attaques')

const monstropochesAttaques = uniqWith([...monstropoches.map((monstropoche, index) => {
	return [
		index,
    attaques.indexOf(sample(attaques))
	]
}), ...attaques.map((attaque, index) => {
	return [
    monstropoches.indexOf(sample(monstropoches)),
		index
	]
})], isEqual)

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
