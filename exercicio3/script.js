const promptMsg1 = 'PARTE 1'
const promptMsg2 = 'PARTE 2'

// Parte 1
console.log(`\n${promptMsg1}\n\n`)

const A = 2 > 5 > 20
const B = 5 === 5 || '5'
const C = !20 > 50
const D = !20 > 50 || 50 > 60

const X = true
const Y = false

if (A) {
  console.log(`A operação é ${X}`)
} else {
  console.log(`A operação é ${Y}`)
}

if (B) {
  console.log(`A operação é ${X}`)
} else {
  console.log(`A operação é ${Y}`)
}

if (C) {
  console.log(`A operação é ${X}`)
} else {
  console.log(`A operação é ${Y}`)
}

if (D) {
  console.log(`A operação é ${X}`)
} else {
  console.log(`A operação é ${Y}`)
}

// Parte 2
console.log(`\n${promptMsg2}\n\n`)

let vendasEmJan = 5784.5
let vendasEmFev = 3418.41
let vendasEmMar = 4124.1
let vendasEmAbr = 1874.0
let vendasEmMai = 7000.0
let vendasEmJun = 9450.0

let salario = 1000
let auxilioCreche = 45.5
let inss = salario - salario * 0.05

let comissaoDeJan = vendasEmJan * 0.1
let comissaoDeFev = vendasEmFev * 0.1
let comissaoDeMar = vendasEmMar * 0.1
let comissaoDeAbr = vendasEmAbr * 0.1
let comissaoDeMai = vendasEmMai * 0.1
let comissaoDeJun = vendasEmJun * 0.1

let salarioDeJan = salario + comissaoDeJan - inss
let salarioDeFev = salario + comissaoDeJan - inss
let salarioDeMar = salario + comissaoDeFev - inss
let salarioDeAbr = salario + comissaoDeMar - inss
let salarioDeMai = salario + comissaoDeMai - inss
let salarioDeJun = salario + comissaoDeJun - inss

let totalDoSalarioEmSeisMeses =
  salarioDeJan +
  salarioDeFev +
  salarioDeMar +
  salarioDeAbr +
  salarioDeMai +
  salarioDeJun

let mediaDoSalarioEmSeisMeses =
  salarioDeJan +
  salarioDeFev +
  salarioDeMar +
  salarioDeAbr +
  salarioDeMai +
  salarioDeJun / 6

const salarioFixoComAuxCreche = salario + auxilioCreche
const comissaoDeJanDeFulano = salario + vendasEmJan * 0.2
const descontoDeJanINSS = salario + vendasEmJan * 0.2 - inss

console.log(`
  Calcule:\n
  1) O salário fixo mais o auxílio creche\n
  R$${salario.toFixed(2).replace('.', ',')} + R$${auxilioCreche
  .toFixed(2)
  .replace('.', ',')} = R$${salarioFixoComAuxCreche
  .toFixed(2)
  .replace('.', ',')}\n
`)

console.log(`
  Calcule:\n
  2) Quanto Fulano de Silva receberá de comissão em janeiro\n 
  R$${salario.toFixed(2).replace('.', ',')} + R$${vendasEmJan
  .toFixed(2)
  .replace('.', ',')} + 10% = R$${comissaoDeJanDeFulano
  .toFixed(2)
  .replace('.', ',')}\n
`)

console.log(`
  Calcule:\n
  3) Quanto Fulano de Silva será descontado em janeiro pelo INSS\n
  R$${salario.toFixed(2).replace('.', ',')} + R$${vendasEmJan
  .toFixed(2)
  .replace('.', ',')} + 10% - R$${inss
  .toFixed(2)
  .replace('.', ',')} = R$${descontoDeJanINSS.toFixed(2).replace('.', ',')}\n
`)

console.log(`
  Imprima:\n
  4) O cálculo do salário de todos os meses com acréscimos e descontos.\n
  O total do salário é R$${totalDoSalarioEmSeisMeses
    .toFixed(2)
    .replace('.', ',')}\n
`)

console.log(`
  Imprima:\n
  5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.\n
  A média do salário é R$${totalDoSalarioEmSeisMeses
    .toFixed(2)
    .replace('.', ',')}\n
`)
