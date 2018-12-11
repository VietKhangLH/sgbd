const file = 'bd.sql'
const {
	writeFileSync,
	appendFileSync,
  readFileSync
} = require('fs')
const reset = () => {
	writeFileSync(file, '')
}
const append = (content) => {
	appendFileSync(file, content)
}

const base = readFileSync('./base/base.sql')
const deleteAll = readFileSync('./base/deleteAll.sql')

reset()
append(base)
append(deleteAll)

const fixtures = [
	'proprietaire',
  'type',
  'attaque',
	'zone',
	'objet',
	'genre',
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


console.log(`Requêtes de création générées --> ${file}`)
console.log(`Prochaine étape : ./run.sh ${file}`)
