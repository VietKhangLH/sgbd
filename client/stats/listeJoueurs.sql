-- la liste des joueurs (ou PNJ), avec, pour chaque joueur,
-- le type de monstropoches qu’il possède en majorité
-- (si un joueur possède plusieurs types en majorité,
-- il apparaitra sur plusieurs lignes), et le nombre de monstropoches
-- de ce type qu’il possède.

select
  proprietaire.nom as joueur,
  count(espece_type.type_id ) as nb_type
from proprietaire
inner join monstropoche
  on monstropoche.proprietaire_id = proprietaire.id
inner join espece
  on espece.id = monstropoche.espece_id
inner join espece_type
  on espece_type.espece_id = espece.id
group by proprietaire.nom
;

