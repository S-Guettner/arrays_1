const inputVorname = document.getElementById("inputVorname")
/* const inputNachname = document.getElementById("inputNachname") */
const listContainer = document.getElementById("listContainer")
let li
const vollerName = []
const teilnehmerListe = []

const list = (hinzufügen) => {
    if(hinzufügen){
        let name = inputVorname.value
        teilnehmerListe.push(name)
        console.log(teilnehmerListe)


        li = document.createElement("li")

        listContainer.append(li)
        li.innerHTML =  teilnehmerListe[teilnehmerListe.length-1]
    }
    else {
        li.remove("li")
        teilnehmerListe.pop()
        console.log(teilnehmerListe)
        /* console.log(listContainer) */
    }
    
    }












