const examplleObg = [
    {
    name: "shalom",
    rank: "turai",
    position: "israel",
    missionTime: 7,
    status: "active"
},
]


// elements
const addPersonnal = document.querySelector(".subm")
const fullName = document.querySelector("#full-name")
const cencelBtn = document.querySelector(".cenc")
const table = document.querySelector("table")
const forceTable = document.querySelector(".force-table")
const addEditHeader = document.querySelector(".add-edit-header")



const createActionElement = () => {
    const actions = document.createElement("td")

    // main div
    const actionsDiv = document.createElement("div")
    actionsDiv.classList.add("actions-div")

    // remove
    const removeDiv = document.createElement("div")
    removeDiv.classList.add("action")
    removeDiv.id = "remove"
    removeDiv.textContent = "Remove"
    removeDiv.addEventListener("click", removePersonnal)
    // mission
    const missionDiv = document.createElement("div")
    missionDiv.classList.add("action")
    missionDiv.id = "mission"
    missionDiv.textContent = "Mission"
    missionDiv.addEventListener("click", lanchMission)
    // edit
    const editDiv = document.createElement("div")
    editDiv.classList.add("action")
    editDiv.id = "edit"
    editDiv.textContent = "Edit"
    editDiv.addEventListener("click", editPersonnal)

    // insert the elements
    actionsDiv.appendChild(removeDiv)
    actionsDiv.appendChild(missionDiv)
    actionsDiv.appendChild(editDiv)
    actions.appendChild(actionsDiv)

    return actions
}

// add row in table - return empty element
const createRow = (obg) => {
    // creting elements of the row
    const newRow = document.createElement("tr")
    const name = document.createElement("td")
    name.textContent = obg.name
    const rank = document.createElement("td")
    rank.textContent = obg.rank
    const position = document.createElement("td")
    position.textContent = obg.position
    const platoon = document.createElement("td")
    platoon.textContent = obg.position
    const status = document.createElement("td")
    status.textContent = obg.status
    const actions = createActionElement()
    newRow.appendChild(name)
    newRow.appendChild(rank)
    newRow.appendChild(position)
    newRow.appendChild(platoon)
    newRow.appendChild(status)
    newRow.appendChild(platoon)
    newRow.appendChild(status)
    newRow.appendChild(actions)

    return newRow
}

const removePersonnal = e => {
    const personallName = e.target.parentElement.parentElement.parentElement.querySelector("td").textContent;
    const personnal = JSON.parse(localStorage.getItem("personnal") || "[]" ).filter(el => el.name != personallName)
    localStorage.personnal = JSON.stringify(personnal)
    
}

const lanchMission = () => {

}

const editPersonnal = (e) => {
    const personallName = e.target.parentElement.parentElement.parentElement.querySelector("td").textContent;
    const personnal = JSON.parse(localStorage.getItem("personnal") || "[]" ).find(el => el.name == personallName)
    
    cencelBtn.classList.toggle("disp-none")
    forceTable.classList.toggle("disp-none")
    addEditHeader.textContent = "EDIT PERSONNAL"
    addPersonnal.textContent = "Save Changes"
}

const loadPersonall = () => {
    const personnal = JSON.parse(localStorage.getItem("personnal")) || []

    for (const obg of personnal) {
        table.appendChild(createRow(obg))
    }
}

addPersonnal.addEventListener("click", e =>{
    const inputs = e.target.parentElement.querySelectorAll(".my-input")
    let [name, rank, position, platon, mission, status] = inputs
    if (name.value == "" ||rank.value == "" || position.value == "") {
        alert("Not all filds was fill")
        return
    }
    const newObg = {
        name: name.value,
        rank: rank.value,
        position: position.value,
        missionTime: mission.value,
        status: status.value
    }
    const personnal = JSON.parse(localStorage.getItem("personnal"))
    personnal.push(newObg)
    localStorage.personnal = JSON.stringify(personnal)
    location.reload()
})

cencelBtn.addEventListener("click", () => {
    cencelBtn.classList.toggle("disp-none")
    forceTable.classList.toggle("disp-none")
    addEditHeader.textContent = "BATALION FORCE MANAGMENT"
    addPersonnal.textContent = "Add Personnal"
})

    loadPersonall()