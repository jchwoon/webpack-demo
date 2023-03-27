import './style/style.css';
import basicProfile from './assets/Maswillaeng.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = `<img src="${basicProfile}"/>`;

  return element;
}

document.body.appendChild(component());
