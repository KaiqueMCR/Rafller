const namesToBeSorted = [
  // { name: 'Kaique', status: '' },
  // { name: 'lucas', status: '' },
  // { name: 'Matheus', status: '' }
]

function addNames() {
  const name = document.querySelector('#inputPeople').value
  if (name === '') {
    alert('Please insert a name first')
  } else {
    namesToBeSorted.push({ name: name, status: '' })

    document.querySelector('#inputPeople').value = ''

    refresh()
    getNames()
  }
}

function removeName(index) {
  namesToBeSorted.splice(index, 1)
  refresh()
  getNames()
}

function nameEvent(event) {
  const element = event.target
  if (element.type === 'button') {
    const index = event.target.dataset.index
    removeName(index)
  } else {
    return
  }
}

function displayNames(name, index) {
  const nameCamp = document.createElement('label')
  nameCamp.classList.add('name')
  nameCamp.innerHTML += `
  <div>${name}</div>
  <button data-index = ${index} type="button">
    <i class="far fa-trash-alt"></i>
  </button>
`
  document.querySelector('.nameList').appendChild(nameCamp)
}

function getNames() {
  refresh()
  namesToBeSorted ?? []
  namesToBeSorted.forEach((name, index) => displayNames(name.name, index))
}

displayNames()

function refresh() {
  let names = document.querySelector('.nameList')

  while (names.firstChild) {
    names.removeChild(names.lastChild)
  }
}

function drawPeople() {
  if (namesToBeSorted.length === 0) {
    alert('Please insert a name first')
  } else {
    const nn = namesToBeSorted.length
    const rn = Math.floor(Math.random() * nn)

    const result = namesToBeSorted[rn].name

    document.getElementById('result').innerText = result
  }
}

function drawNumber() {
  const nn = document.querySelector('#inputNumber').value
  const rn = Math.round(Math.random() * nn)

  document.getElementById('result').innerText = rn
}

function switchMode() {
  document.querySelector('.sortPeople').classList.toggle('unselected')
  document.querySelector('.sortNumber').classList.toggle('unselected')
  document.querySelector('#result').innerText = 'Raffler'
}

document.querySelector('#add').addEventListener('click', addNames)
document.getElementById('names', nameEvent).addEventListener('click', nameEvent)
document.querySelector('#drawNumber').addEventListener('click', drawNumber)
document.querySelector('#drawPeople').addEventListener('click', drawPeople)
document.querySelector('#switch').addEventListener('click', switchMode)

getNames()
