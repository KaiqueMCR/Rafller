const namesToBeSorted = []

const nameList = document.querySelector('.nameList')

const inputPeople = document.querySelector('#inputPeople')
const inputNumber = document.querySelector('#inputNumber')

const sortPeople = document.querySelector('.sortPeople')
const sortNumber = document.querySelector('.sortNumber')

const addNamesBtn = document.getElementById('add')
const drawNumberBtn = document.getElementById('drawNumber')
const drawPeopleBtn = document.getElementById('drawPeople')
const switchModeBtn = document.getElementById('switch')

const result = document.getElementById('result')

function addNames() {
  if (inputPeople.value === '') {
    alert('Please insert a name first')
  } else {
    namesToBeSorted.push({
      name: inputPeople.value,
      status: ''
    })

    inputPeople.value = ''

    refresh()
    getNames()
  }
}

function removeName(index) {
  namesToBeSorted.splice(index, 1)
  refresh()
  getNames()
}

function listenNameEvent(event) {
  const element = event.target

  if (element.type === 'button') {
    const index = event.target.dataset.index
    removeName(index)
  } else {
    return
  }
}

function displayNames(name, index) {
  const nameField = document.createElement('label')
  nameField.classList.add('name')
  nameField.innerHTML += `

  <div>${name}</div>

  <button data-index="${index}" type="button">
    <i class="far fa-trash-alt"></i>
  </button>

  `

  nameList.appendChild(nameField)
}

function getNames() {
  refresh()
  namesToBeSorted ?? []
  namesToBeSorted.forEach((name, index) => displayNames(name.name, index))
}

function refresh() {
  while (nameList.firstChild) {
    nameList.removeChild(nameList.lastChild)
  }
}

function drawPeople() {
  if (namesToBeSorted.length === 0) {
    alert('Please insert a name first')
  } else {
    const namesNumber = namesToBeSorted.length
    const randomNumber = Math.floor(Math.random() * namesNumber)
    const sortedName = namesToBeSorted[randomNumber].name

    result.innerText = sortedName
  }
}

function drawNumber() {
  const numberRange = document.querySelector('#inputNumber').value
  const sortedNumber = Math.round(Math.random() * numberRange)

  result.innerText = sortedNumber
}

function switchMode() {
  sortPeople.classList.toggle('unselected')
  sortNumber.classList.toggle('unselected')
  result.innerText = 'Raffler'
}

function onEnter(event) {
  if (
    event.key === 'Enter' &&
    inputPeople.value != '' &&
    sortNumber.classList.contains('unselected')
  ) {
    addNames()
  } else if (
    event.key === 'Enter' &&
    inputNumber.value != '' &&
    sortPeople.classList.contains('unselected')
  ) {
    drawNumber()
  }
}

getNames()

addNamesBtn.addEventListener('click', addNames)
names.addEventListener('click', listenNameEvent)
drawNumberBtn.addEventListener('click', drawNumber)
drawPeopleBtn.addEventListener('click', drawPeople)
switchModeBtn.addEventListener('click', switchMode)
window.addEventListener('keydown', onEnter)
