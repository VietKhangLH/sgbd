const { createInsertQuery, randomIdIf } = require('./_helper')
const faker = require('faker')

const { proprietaires } = require('./proprietaires')
const { genres } = require('./genres')
const { etats } = require('./etats')
const { objets } = require('./objets')
const { especes } = require('./especes')

const monstropoches = Array.from({
	length: 100
}, () => {
	const pv = faker.random.number(100)
	return [
		`'${faker.internet.userName()}'`,
		randomIdIf(50, proprietaires),
		randomIdIf(100, genres),
		randomIdIf(100, etats),
		randomIdIf(100, objets),
		randomIdIf(100, especes),
		pv,
		faker.random.number(100),
		faker.random.number(pv)
	]
})

module.exports = {
	monstropoches,
	generate () {
		return [...monstropoches,
      ...Array.from({ length: 20 }, () => ([ // on add des monstros de la même espece pour un test fonctionnel
        `'${faker.internet.userName()}'`,
        0,
        randomIdIf(100, genres),
        randomIdIf(100, etats),
        randomIdIf(100, objets),
        faker.random.number(50) ? 0 : randomIf(100, especes),
        100,
        faker.random.number(100),
        faker.random.number(100)
      ]))].map((monstropoche, index) => {
		return createInsertQuery('monstropoche', [
				index,
				...monstropoche
			])
		}).join('')
	}
}
