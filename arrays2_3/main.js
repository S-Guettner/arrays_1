const inputVorname = document.getElementById("inputVorname")
const inputNachname = document.getElementById("inputNachname")

const vollerName = []

const output = document.getElementById("output")
const teilnehmerListe = []

const list = (hinzufügen) => {
    const vollerName = [inputVorname.value , inputNachname.value]

    hinzufügen ? teilnehmerListe.unshift(vollerName): teilnehmerListe.shift()
    output.textContent = `${teilnehmerListe} `
    }
