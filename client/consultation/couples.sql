-- les couples de monstropoches pouvant engendrer un enfant ;
-- pour engendrer, un couple doit être formé de deux individus
-- de même espèce ou ayant la même espèce souche, l’un doit
-- posséder le genre male et l’autre le genre femelle ;
-- les deux individus doivent aussi être libres
-- ou appartenir au même propriétaire et avoir des PE supérieurs à 20.

select
  distinct
  femelle.surnom as femelle,
  male.surnom as male
from
  (
    select
      monstropoche.id as id,
      monstropoche.surnom as surnom,
      monstropoche.pe as pe,
      espece.id as espece,
      proprietaire.id as proprietaire
    from monstropoche
    inner join genre
      on genre_id = genre.id
    inner join espece
      on espece_id = espece.id
    right join proprietaire
      on proprietaire_id = monstropoche.proprietaire_id
    where genre.femelle = 1
  ) femelle,
  (
    select
      monstropoche.id as id,
      monstropoche.surnom as surnom,
      monstropoche.pe as pe,
      espece.id as espece,
      proprietaire.id as proprietaire 
    from monstropoche
    inner join genre
      on genre_id = genre.id
    inner join espece
      on espece_id = espece.id
    right join proprietaire
      on proprietaire_id = monstropoche.proprietaire_id
    where genre.male = 1
  ) male
where
  femelle.id <> male.id -- monstropoches differents
  and femelle.espece = male.espece
  and (
    (
      femelle.proprietaire is null
      and male.proprietaire is null
    )
    or (
      femelle.proprietaire = male.proprietaire
      and femelle.pe > 20
      and male.pe > 20
    )
  )
;
