select
  pe_0_9.nombre as pe_0_9,
  pe_10_19.nombre as pe_10_19,
  pe_20_29.nombre as pe_20_29,
  pe_30_39.nombre as pe_30_39,
  pe_40_49.nombre as pe_40_49,
  pe_50_59.nombre as pe_50_59,
  pe_60_69.nombre as pe_60_69,
  pe_70_79.nombre as pe_70_79,
  pe_80_89.nombre as pe_80_89,
  pe_90_99.nombre as pe_90_99,
  pe_100_100.nombre as pe_100_100
from
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 0 and pe <= 9
  ) pe_0_9,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 10 and pe <= 19
  ) pe_10_19,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 20 and pe <= 29
  ) pe_20_29,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 30 and pe <= 39
  ) pe_30_39,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 40 and pe <= 49
  ) pe_40_49,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 50 and pe <= 59
  ) pe_50_59,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 60 and pe <= 69
  ) pe_60_69,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 70 and pe <= 79
  ) pe_70_79,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 80 and pe <= 89
  ) pe_80_89,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 90 and pe <= 99
  ) pe_90_99,
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 100 and pe <= 100
  ) pe_100_100
;
