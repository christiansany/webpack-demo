import getCharacters from './characters';
// import './styles/styles.css'

function component() {
  const element = document.createElement('h1');
  element.innerHTML = 'Characters: ' + getCharacters().join(', ');
  return element;
}

document.body.appendChild(component());

const a = {
  foo: 'bar',
  hello: 'world',
};

const b = {
  ...a,
};

console.log({ ...b })