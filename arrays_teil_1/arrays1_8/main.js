const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]
deutscheGerichte.unshift("Schnitzel","Pfannekuchen","Spätzle","Weißwurst","kaiserschmarrn" )
console.log(deutscheGerichte);

let nichtGut = [deutscheGerichte.shift(),deutscheGerichte.shift(),deutscheGerichte.shift()]

console.log(nichtGut);