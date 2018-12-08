--  la liste des objets, avec pour chaque objet, des booléens indiquant
-- respectivement s’il est nécessaire à une mue, si c’est un objet
-- offensif et si c’est un objet défensif ;

select
  objet.nom,
  est_offensif,
  est_defensif
  -- pour_muter
from objet
;

