-- le nombre de monstropoches de chaque espèce

select
  espece.nom,
  count(monstropoche.id) as nombre_monstropoches
from monstropoche
right join espece
  on espece_id = espece.id
group by espece.nom
order by
  espece.nom,
  nombre_monstropoches
;

