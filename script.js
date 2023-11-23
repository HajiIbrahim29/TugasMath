document.write(`<h4>Variabel Round, Flor, Ceil</h4>`)

// Variabel
let A = 6.4
document.write(`Variabel A adalah ${A} <br>`)
let B = 9.7
document.write(`Variabel B adalah ${B} <br>`)
let C = 7.8
document.write(`Variabel C adalah ${C} <br><br>`)

// Math Round
document.write(`<h4> Math Round </h4>`)

var Round1 = Math.round(A);
console.log(Round1);
document.write(`Hasil pembulatan tedekat A adalah ${Round1} <br>`);

const Round2 = Math.round(B);
console.log(Round2);
document.write(`Hasil pembulatan tedekat B adalah ${Round2} <br>`);

const Round3 = Math.round(C);
console.log(Round3);
document.write(`Hasil pembulatan tedekat C adalah ${Round3} <br>`);

// Math Floor
document.write(`<h4> Math Flor </h4>`)

const Floor1 = Math.floor(A);
console.log(Floor1)
document.write(`Hasil pembulatan kebawah A adalah ${Floor1} <br>`);

const Floor2 = Math.floor(B);
console.log(Floor2)
document.write(`Hasil pembulatan kebawah B adalah ${Floor2} <br>`);

const Floor3 = Math.floor(C);
console.log(Floor3)
document.write(`Hasil pembulatan kebawah C adalah ${Floor3} <br>`);

// Math Ceil
document.write(`<h4> Math Ceil </h4>`)

const Ceil1 = Math.ceil(A);
console.log(Ceil1)
document.write(`Hasil pembulatan Ke Atas A adalah ${Ceil1} <br>`);

const Ceil2 = Math.ceil(B);
console.log(Ceil2)
document.write(`Hasil pembulatan Ke Atas B adalah ${Ceil2} <br>`);

const Ceil3 = Math.ceil(C);
console.log(Ceil3)
document.write(`Hasil pembulatan Ke Atas C adalah ${Ceil3} <br>`);

document.write(`<h3> Variabel Pow </h3>`)
let a = 3
document.write(`Variable A = ${a}<br>`);
let b = 5
document.write(`Variable B = ${b}<br>`);
let c = 2
document.write(`Variable C = ${c}<br>`);
let d = 6
document.write(`Variable D = ${d}<br>`);
let e = 4
document.write(`Variable E = ${e}<br>`);
let f = 7
document.write(`Variable F = ${f}<br>`);

// Math POW
document.write(`<h3> Math pow </h3>`)

const Pow1 = Math.pow(a,b)
console.log(Pow1)
document.write(`Hasil pemangkatan dari A dan B (3 pangkat 5) adalah ${Pow1} <br>`);

const Pow2 = Math.pow(c,d);
console.log(Pow2)
document.write(`Hasil pemangkatan dari C dan D (2 pangkat 6) adalah ${Pow2} <br>`);

const Pow3 = Math.pow(e,f);
console.log(Pow3)
document.write(`Hasil pemangkatan dari E dan F (4 pangkat 7) adalah ${Pow3} <br>`);

// Math srqt

document.write(`<h3> Variabel SQRT </h3>`)
let g = 36
document.write(`Variable G = ${g}<br>`);
let h = 16
document.write(`Variable H = ${h}<br>`);
let i = 49
document.write(`Variable I = ${i}<br>`);

document.write(`<h3> Math Srqt </h3>`)

const Srqt1 = Math.sqrt(g)
console.log(Srqt1)
document.write(`Hasil akar kuadrat dari G adalah  ${Srqt1} <br>`);

const Srqt2 = Math.sqrt(h);
console.log(Srqt2)
document.write(`Hasil akar kuadrat dari H adalah ${Srqt2} <br>`);

const Srqt3 = Math.sqrt(i);
console.log(Srqt3)
document.write(`Hasil akar kuadrat dari I adalah ${Srqt3} <br>`);