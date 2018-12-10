-- la liste des monstropoches pouvant effectuer une mue,
-- avec leur espèce actuelle et l’espèce dans laquelle ils peuvent muer,
-- leur PE et éventuellement l’objet qu’ils portent qui rend la
-- mue possible (noter qu’éventuellement, un monstropoche peut avoir
-- le choix entre plusieurs mues) ;

select
  monstropoche.surnom as monstropoche,
  espece.nom as espece,
  mutation.nom as mutation,
  monstropoche.pe as points_experience,
  decode(objet.nom, null, 'Aucun objet evoluant', objet.nom) as objet_evoluant
from espece mutation
inner join espece
  on mutation.source_id = espece.id
inner join monstropoche
  on monstropoche.espece_id = espece.id
left join objet
  on objet.id = espece.objet_id
order by monstropoche.surnom
;

