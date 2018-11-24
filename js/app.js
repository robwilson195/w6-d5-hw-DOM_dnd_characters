document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('#new-character-form');
  form.addEventListener('submit', handleForm);

  // const deleteButton = document.querySelector('#delete-all-button');
  // deleteButton.addEventListener('click', handleDelete);
});

const handleForm = function (event) {
  event.preventDefault();

  // console.log(this.skills.val());

  const newCharacter = document.createElement('div');
  newCharacter.classList.add('character-entry');
  const characterList = document.querySelector('.characters-wrapper');
  characterList.appendChild(newCharacter);

  const characterName = document.createElement('h3');
  characterName.textContent = `${this.name.value}`;
  newCharacter.appendChild(characterName);

  const characterRaceClass = document.createElement('p');
  characterRaceClass.textContent = `${this.race.value} ${this.specialty.value}`
  newCharacter.appendChild(characterRaceClass)

  const characterAttributes = document.createElement('ul');
  newCharacter.appendChild(characterAttributes);
  const attributes = ['Str', this.str.value, 'Dex', this.dex.value, 'Con', this.con.value, 'Int', this.int.value, 'Wis', this.wis.value, 'Cha', this.cha.value];
  for (let i = 0; i < attributes.length; i+=2) {
    let currentAttribute = document.createElement('li');
    currentAttribute.textContent = `${attributes[i]}: ${attributes[i+1]}`;
    characterAttributes.appendChild(currentAttribute);
  }
}
