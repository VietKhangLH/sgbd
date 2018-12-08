const { createInsertQuery } = require('./_helper')
const attaques = [`Triplattaque`, `Escalade`, `Morphing`, `Vœu`, `Grobisou`, `Pilonnage`, `Recyclage`, `Regard Médusant`, `E-Coque`, `Constriction`, `Picanon`, `Uppercut`, `Coup de Main`, `Flash`, `Conversion`, `Affûtage`, `Croc de Mort`, `Par Ici`, `Attrition`, `Force-Nature`, `Combo-Griffe`, `Explosion`, `Trempette`, `Exuviation`, `CoudKrâne`, `Météores`, `Relais`, `Rengorgement`, `BoulArmure`]
const faker = require('faker')
const { sample } = require('lodash')

const { types } = require('./types')

module.exports = {
	attaques,
	generate () {
		return attaques.map((attaque, index) => {
			return createInsertQuery('attaque', [
				index,
        types.indexOf(sample(types)),
				`'${attaque}'`,
				faker.random.number(250),
				faker.random.number(100),
				faker.random.number(100)
				])
		}).join('')
	}
}