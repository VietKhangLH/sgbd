const file = 'nbMonstroParExperience.sql'
const {
  writeFileSync,
  appendFileSync
} = require('fs')
const reset = () => {
  writeFileSync(file, '')
}
const append = (content) => {
  appendFileSync(file, content)
}

const MIN = 0
const MAX = 100
const STEP = 10

const intervals = Array.from({
  length: (MAX - MIN + 1) / STEP + (MAX - MIN + 1) % STEP
}, (_, i) => ({
  start: i * STEP,
  end: Math.min(i * STEP + STEP - 1, MAX)
}))

reset()

append(`select
`)
append(intervals.map(({ start, end }) =>
  `  pe_${start}_${end}.nombre as pe_${start}_${end}`
).join(',\n'))
append(`
from
`)
append(intervals.map(({ start, end }) =>
  `  (
    select sum(id) as nombre
    from monstropoche
    where pe >= ${start} and pe <= ${end}
  ) pe_${start}_${end}`
).join(',\n'))
append(`
;
`)


/*
select
  pe_0_9.nombre as pe_0_9
from
  (
    select sum(id) as nombre
    from monstropoche
    where pe >= 0 and pe <= 9
  ) pe_0_9
;


*/
/*
for (let i = MIN ; i < MAX ; i += STEP) {
  const from = i
  const to = i + STEP - 1
  appendFileSync('test.sql', `
  pe_${from}_${to}.nombre as pe_${from}_${to}
`)
}
*/
