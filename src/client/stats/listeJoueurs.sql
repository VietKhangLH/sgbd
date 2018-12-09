-- la liste des joueurs (ou PNJ), avec, pour chaque joueur,
-- le type de monstropoches qu’il possède en majorité
-- (si un joueur possède plusieurs types en majorité,
-- il apparaitra sur plusieurs lignes), et le nombre de monstropoches
-- de ce type qu’il possède.

select
  proprietaire,
  type,
  nombre_monstropoche
from
(
  select
    proprietaire,
    type,
    nombre_monstropoche,
    row_number() over (partition by proprietaire order by nombre_monstropoche desc) as row_num
  from
  (
    select
      proprietaire.nom as proprietaire,
      type.nom as type,
      count(type.id) as nombre_monstropoche
    from type
    inner join espece_type on espece_type.type_id = type.id
    inner join espece on espece.id = espece_type.espece_id
    inner join monstropoche on monstropoche.espece_id = espece.id
    inner join proprietaire on proprietaire.id = monstropoche.proprietaire_id
    group by
      proprietaire.nom,
      type.nom
    order by proprietaire.nom
  )
)
where row_num = 1
;

