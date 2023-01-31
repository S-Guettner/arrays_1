const inputVorname = document.getElementById("inputVorname")
const inputNachname = document.getElementById("inputNachname")
const listContainer = document.getElementById("listContainer")

const vollerName = []

const output = document.getElementById("output")
const teilnehmerListe = []

const list = (hinzufügen) => {
    const vollerName = [inputVorname.value , inputNachname.value]/* .join(" ") */
/*     hinzufügen ? (teilnehmerListe.push(vollerName),console.log(teilnehmerListe),listContainer.textContent = teilnehmerListe)
    :
    (teilnehmerListe.pop(),console.log(teilnehmerListe),console.log("test")) */
    let newElement = document.createElement("li")
    listContainer.appendChild(newElement)
    
    hinzufügen ? (teilnehmerListe.unshift(vollerName),newElement.textContent = vollerName.join(" "))
    :
    (teilnehmerListe.shift(),listContainer.removeChild(newElement),console.log("test"))

    }
