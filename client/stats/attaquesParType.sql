-- le nombre d’attaques disponibles pour chaque type,
-- avec le nombre de PE moyen nécessaire pour accéder à ces attaques,
-- ainsi que leur puissance moyenne ;

select
  type.nom as type,
  count(attaque.id) as nombre_attaques,
  avg(attaque.perequis) as perequis_moyen,
  avg(attaque.puissance) as puissance_moyenne
from attaque
right join type
  on type_id = type.id
group by type.nom
order by
  nombre_attaques,
  type,
  perequis_moyen,
  puissance_moyenne
;

