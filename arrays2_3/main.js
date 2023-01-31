const inputVorname = document.getElementById("inputVorname")
const inputNachname = document.getElementById("inputNachname")
const listContainer = document.getElementById("listContainer")

const vollerName = []

const output = document.getElementById("output")
const teilnehmerListe = []

const list = (hinzufügen) => {
    const vollerName = [inputVorname.value , inputNachname.value]
    let newElement = document.createElement("li")
    newElement.textContent = vollerName
    listContainer.appendChild(newElement)

    
/*     hinzufügen ? teilnehmerListe.unshift(vollerName) : teilnehmerListe.shift()
    newElement.textContent = `${teilnehmerListe} ` */
    }
