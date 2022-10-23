const PROMPT_MSG_1 = 'Digite o primeiro número:'
const PROMPT_MSG_2 = 'Digite o segundo número:'
const MSG_1 = 'O primeiro número é maior que o segundo?'
const MSG_2 = 'O primeiro número é igual ao segundo?'
const MSG_3 = 'O primeiro número é divisível pelo segundo?'
const MSG_4 = 'O segundo número é divisível pelo primeiro?'
const X = Number(prompt(PROMPT_MSG_1))
const Y = Number(prompt(PROMPT_MSG_2))
const A = true
const B = false

console.log(X)
console.log(Y)

if (X > Y) {
  console.log(`
    ${MSG_1} — ${A}\n
    Sim, ${X} é maior do que ${Y}
  `)
} else {
  console.log(`
    ${MSG_1} — ${B}\n
    Não, ${X} é menor do que ${Y}.
  `)
}

if (X === Y) {
  console.log(`
    ${MSG_2} — ${A}\n
    Sim, ${X} é igual a ${Y}.
  `)
} else {
  console.log(`
    ${MSG_2} — ${B}\n
    Não, ${X} não é igual a ${Y}.
  `)
}

if (X % Y == 0) {
  console.log(`
    ${MSG_3} — ${A}\n
    Sim, ${X} é divisível por ${Y}.
  `)
} else {
  console.log(`
    ${MSG_3} — ${B}\n
    Não, ${X} não é divisível por ${Y}.
  `)
}

if (Y % X == 0) {
  console.log(`
    ${MSG_4} — ${A}\n
    Sim, ${Y} é divisível por ${X}.
  `)
} else {
  console.log(`
    ${MSG_4} — ${B}\n
    Não, ${Y} não é divisível por ${X}.
  `)
}
