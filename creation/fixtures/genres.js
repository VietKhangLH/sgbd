const { createInsertQuery } = require('./_helper')

const genres = [[0, 0], [0, 1], [1, 1], [1, 0]]

module.exports = {
	genres,
	generate () {
		return genres
			.map((genre, index) => createInsertQuery('genre', [index, ...genre]))
			.join('')
	}
}