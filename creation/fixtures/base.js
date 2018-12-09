module.exports = `drop table monstropoche_attaque;
drop table espece_zone;
drop table espece_type;
drop table objet_zone;
drop table monstropoche;
drop table espece;
drop table etat;
drop table genre;
drop table objet;
drop table zone;
drop table attaque;
drop table type;
drop table proprietaire;

create table proprietaire (
  id int not null,
  nom varchar(255) not null,
  primary key(id)
);
create table type (
  id int not null,
  nom varchar(255) not null,
  primary key(id)
);
create table attaque (
  id int not null,
  type_id int not null,
  nom varchar(255) not null,
  puissance int not null,
  perequis int not null,
  precizion int not null,
  constraint fk_attaque_type foreign key (type_id) references type(id),
  primary key(id)
);
create table zone (id int not null,
  nom varchar(255) not null,
  primary key(id)
);
create table objet (id int not null,
  nom varchar(255) not null,
  est_unique number(1) not null,
  est_defensif number(1),
  est_offensif number(1),
  primary key(id)
);
create table genre (id int not null,
  femelle number(1) not null,
  male number(1) not null,
  primary key(id)
);
create table etat (id int not null,
  nom varchar(255) not null,
  primary key(id)
);
create table espece (
  id int not null,
  objet_id int,
  source_id int,
  nom varchar(255) not null,
  constraint fk_espece_objet foreign key (objet_id) references objet(id),
  constraint fk_espece_espece foreign key (source_id) references espece(id),
  primary key(id)
);
create table monstropoche (id int not null,
  surnom varchar(255) not null,
  proprietaire_id int,
  genre_id int not null,
  etat_id int not null,
  objet_id int,
  espece_id int not null,
  pv int not null,
  pe int not null,
  pv_actuel int not null,
  constraint fk_monstropoche_proprietaire foreign key (proprietaire_id) references proprietaire(id),
  constraint fk_monstropoche_genre foreign key (genre_id) references genre(id),
  constraint fk_monstropoche_etat foreign key (etat_id) references etat(id),
  constraint fk_monstropoche_objet foreign key (objet_id) references objet(id),
  constraint fk_monstropoche_espece foreign key (espece_id) references espece(id),
  primary key(id)
);
create table objet_zone (objet_id int not null,
  zone_id int not null,
  constraint fk_objet_zone_objet foreign key (objet_id) references objet(id),
  constraint fk_objet_zone_zone foreign key (zone_id) references zone(id),
  primary key(objet_id,
  zone_id)
);
create table espece_type (espece_id int not null,
  type_id int not null,
  constraint fk_espece_type_espece foreign key (espece_id) references espece(id),
  constraint fk_espece_type_type foreign key (type_id) references type(id),
  primary key(espece_id,
  type_id)
);
create table espece_zone (espece_id int not null,
  zone_id int not null,
  constraint fk_espece_zone_espece foreign key (espece_id) references espece(id),
  constraint fk_espece_zone_zone foreign key (zone_id) references zone(id),
  primary key(espece_id,
  zone_id)
);
create table monstropoche_attaque (monstropoche_id int not null,
  attaque_id int not null,
  constraint fk_monstropoche_attaque_m foreign key (monstropoche_id) references monstropoche(id),
  constraint fk_monstropoche_attaque_a foreign key (attaque_id) references attaque(id),
  primary key(monstropoche_id,
  attaque_id)
);

delete from monstropoche_attaque;
delete from espece_zone;
delete from espece_type;
delete from objet_zone;
delete from monstropoche;
delete from espece;
delete from etat;
delete from type;
delete from genre;
delete from objet;
delete from attaque;
delete from zone;
delete from proprietaire;
`
