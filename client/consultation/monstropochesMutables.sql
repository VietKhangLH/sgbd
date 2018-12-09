-- la liste des monstropoches pouvant effectuer une mue,
-- avec leur espèce actuelle et l’espèce dans laquelle ils peuvent muer,
-- leur PE et éventuellement l’objet qu’ils portent qui rend la
-- mue possible (noter qu’éventuellement, un monstropoche peut avoir
-- le choix entre plusieurs mues) ;

select
  monstropoche.surnom as monstropoche,
  source.nom as espece,
  espece.nom as mutation,
  monstropoche.pe as points_experience,
  objet.nom as objet_evoluant
from espece
inner join espece source
  on espece.source_id = source.id
inner join monstropoche
  on monstropoche.espece_id = source.id
left join objet
  on objet.id = monstropoche.objet_id 
;

