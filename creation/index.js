const file = 'init.sql'
const {
	writeFileSync,
	appendFileSync
} = require('fs')
const reset = () => {
	writeFileSync(file, '')
}
const append = (content) => {
	appendFileSync(file, content)
}

const base = require('./fixtures/base')
const deleteAll = require('./fixtures/deleteAll')

reset()
append(base)
append(deleteAll)

const fixtures = [
	'proprietaire',
	'zone',
	'attaque',
	'objet',
	'genre',
	'type',
	'etat',
	'espece',
	'monstropoche',
	'objets-zone',
	'especes-type',
	'especes-zone',
	'monstropoches-attaque'
]

fixtures.forEach(entity => {
	append(require(`./fixtures/${entity}s`).generate())
})


console.log('Requêtes de création générées --> init.sql')
console.log('Prochaine étape : ./run.sh init')
