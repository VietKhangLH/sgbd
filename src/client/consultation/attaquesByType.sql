-- la liste des attaques accessibles par chaque type,
-- classée par ordre croissant de puissance

select
  type.nom as Type,
  attaque.nom as Attaque,
  attaque.puissance
from attaque
inner join
  type on type_id = type.id
order by
  type.nom,
  attaque.puissance
;


