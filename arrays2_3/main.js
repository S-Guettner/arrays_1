const inputVorname = document.getElementById("inputVorname")
const listContainer = document.getElementById("listContainer")
let li
const teilnehmerListe = []

const list = (hinzufügen) => {
    if(hinzufügen){
        let name = inputVorname.value
        teilnehmerListe.push(name)
        li = document.createElement("li")
        listContainer.append(li)
        li.innerHTML =  teilnehmerListe[teilnehmerListe.length-1]
    }else {
        let lastChild = document.querySelector("li:last-child")
        lastChild.remove()
        teilnehmerListe.pop()
    }
}












