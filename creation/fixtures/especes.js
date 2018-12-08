const { createInsertQuery, randomIdIf } = require('./_helper')
const faker = require('faker')
const { uniq, sample } = require('lodash')

const especes = [`Bulbizarre`, `Chenipan`, `Voltorbe`, `Électrode`, `Nœunœuf`, `Noadkoko`, `Osselait`, `Ossatueur`, `Kicklee`, `Tygnon`, `Excelangue`, `Smogo`, `Chrysacier`, `Smogogo`, `Rhinocorne`, `Rhinoféros`, `Leveinard`, `Saquedeneu`, `Kangourex`, `Hypotrempe`, `Hypocéan`, `Poissirène`, `Poissoroy`, `Papilusion`, `Stari`, `Staross`, `M.Mime`, `Insécateur`, `Lippoutou`, `Élektek`, `Magmar`, `Scarabrute`, `Tauros`, `Magicarpe`, `Aspicot`, `Léviator`, `Lokhlass`, `Métamorph`, `Évoli`, `Aquali`, `Voltali`, `Pyroli`, `Porygon`, `Amonita`, `Amonistar`, `Coconfort`, `Kabuto`, `Kabutops`, `Ptéra`, `Ronflex`, `Artikodin`, `Électhor`, `Sulfura`, `Minidraco`, `Draco`, `Dracolosse`, `Dardargnan`, `Mewtwo`, `Mew`, `Roucool`, `Roucoups`, `Roucarnage`, `Rattata`, `Herbizarre`, `Rattatac`, `Piafabec`, `Rapasdepic`, `Abo`, `Arbok`, `Pikachu`, `Raichu`, `Sabelette`, `Sablaireau`, `Nidoran♀`, `Florizarre`, `Nidorina`, `Nidoqueen`, `Nidoran♂`, `Nidorino`, `Nidoking`, `Mélofée`, `Mélodelfe`, `Feunard`, `Rondoudou`, `Salamèche`, `Grodoudou`, `Nosferapti`, `Nosferalto`, `Mystherbe`, `Ortide`, `Rafflesia`, `Paras`, `Parasect`, `Mimitoss`, `Aéromite`, `Reptincel`, `Taupiqueur`, `Triopikeur`, `Miaouss`, `Persian`, `Psykokwak`, `Akwakwak`, `Férosinge`, `Colossinge`, `Caninos`, `Arcanin`, `Dracaufeu`, `Ptitard`, `Têtarte`, `Tartard`, `Abra`, `Kadabra`, `Alakazam`, `Machoc`, `Machopeur`, `Mackogneur`, `Chétiflor`, `Carapuce`, `Boustiflor`, `Empiflor`, `Tentacool`, `Tentacruel`, `Racaillou`, `Gravalanch`, `Grolem`, `Ponyta`, `Galopa`, `Carabaffe`, `Flagadoss`, `Magnéton`, `Canarticho`, `Dodrio`, `Otaria`, `Tadmorv`, `Grotadmorv`, `Kokiyas`, `Crustabri`, `Spectrum`, `Ectoplasma`, `Soporifik`, `Hypnomade`, `Krabboss`]

const { objets } = require('./objets')

module.exports = {
	especes,
	generate () {
		return especes.map((espece, index) => {
			return createInsertQuery('espece', [
				index,
				randomIdIf(50, objets),
				randomIdIf(10, especes.slice(0, index)),
				// les espèces après index n'existent pas encore
				`'${espece}'`
				])
		}).join('')
	}
}
