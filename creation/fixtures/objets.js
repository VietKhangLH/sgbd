const { createInsertQuery } = require('./_helper')
const objets = [`Défense +`, `Muscle +`, `Défense Spéc`, `Déf. Spé. +`, `Attaque +`, `Spécial +`, `Précision +`, `Vitesse +`, `Baie Tamato`, `Baie Résin`, `Baie Lonme`, `Baie Qualot`, `Baie Alga`, `Baie Grena`, `Baie Mepo`, `Baie Willia`, `Baie Fraive`, `Baie Pêcha`, `Baie Maron`, `Baie Oran`]

module.exports = {
	objets,
	generate () {
		return objets
			.map((objet, index) => createInsertQuery('objet', [index, `'${objet}'`, 0, 0]))
			.join('')
	}
}
