const input = document.getElementById("input")
const output = document.getElementById("output")
const teilnehmerListe = []

const list = (hinzufügen) => {
    hinzufügen ? teilnehmerListe.unshift(input.value): teilnehmerListe.shift()
    output.textContent = `${teilnehmerListe} `
    }
