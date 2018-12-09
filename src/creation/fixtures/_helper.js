const faker = require('../faker')
const { sample } = require('lodash')

const sanitize = (str) => {
  return typeof(str) === 'string'
    ? `'${str.replace(/&/gim, '').split(`'`).join('')}'`
    : str === null
      ? 'null'
      : str
}

module.exports = {
	createInsertQuery (table, data) {
		return `insert into ${table} values ( ${data.map(d => sanitize(d)).join(',')} );\n`
	},
	randomIdIf (percentage, from) {
		return faker.random.number(100) <= percentage ? from.indexOf(sample(from)) : null
	}
}
