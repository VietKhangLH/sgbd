-- le nombre de monstropoches de chaque espèce

select
  espece.nom,
  count(monstropoche.id) as nombre_monstropoches
from monstropoche
inner join espece
  on espece_id = espece.id
group by espece.nom
;

