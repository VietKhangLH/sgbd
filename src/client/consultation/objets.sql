--  la liste des objets, avec pour chaque objet, des booléens indiquant
-- respectivement s’il est nécessaire à une mue, si c’est un objet
-- offensif et si c’est un objet défensif ;

select distinct
  objet.nom,
  est_offensif,
  est_defensif,
  decode (espece.objet_id, null, 0, 1) as pour_muter
from objet
left join espece on espece.objet_id = objet.id
;

