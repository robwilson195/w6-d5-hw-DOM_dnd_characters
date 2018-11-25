document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-character-form');
  form.addEventListener('submit', handleForm);

  const deleteButton = document.querySelector('#delete-all-button');
  deleteButton.addEventListener('click', handleDelete);
});

const handleForm = function (event) {
  event.preventDefault();

  const newCharacter = document.createElement('div');
  newCharacter.classList.add('character-entry');
  const characterList = document.querySelector('.characters-wrapper');
  characterList.appendChild(newCharacter);

  const characterName = document.createElement('h4');
  characterName.textContent = `${this.name.value}`;
  newCharacter.appendChild(characterName);

  const characterRaceClass = document.createElement('p');
  characterRaceClass.textContent = `${this.race.value} ${this.specialty.value}`
  newCharacter.appendChild(characterRaceClass)

  const numbersDiv = document.createElement('div');
  numbersDiv.classList.add('numbers-wrapper')
  newCharacter.appendChild(numbersDiv)

  const characterAttributes = document.createElement('ul');
  numbersDiv.appendChild(characterAttributes);
  const attributes = ['Str', this.str.value, 'Dex', this.dex.value, 'Con', this.con.value, 'Int', this.int.value, 'Wis', this.wis.value, 'Cha', this.cha.value];
  for (let i = 0; i < attributes.length; i+=2) {
    let currentAttribute = document.createElement('li');
    currentAttribute.textContent = `${attributes[i]}: ${attributes[i+1]}`;
    characterAttributes.appendChild(currentAttribute);
  }

  const characterProfs = document.createElement('ul');
  numbersDiv.appendChild(characterProfs);
  const skillsArray = Array.from(this.skills).filter((option) => {
    return option.selected
  });
  const skillProficiencies = skillsArray.map((option) => {
    return option.innerHTML
  });
  for (let i = 0; i < skillProficiencies.length; i++) {
    let currentProficiency = document.createElement('li');
    currentProficiency.textContent = `${skillProficiencies[i]}`;
    characterProfs.appendChild(currentProficiency);
  }

}

const handleDelete = function () {
  characterLibrary = document.querySelector('.characters-wrapper')
  characterLibrary.textContent = '';
}
