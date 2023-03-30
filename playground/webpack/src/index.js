function component() {
  const element = document.createElement('pre');
  element.innerText = 'Hello, webpack';
  return element;
}

document.body.appendChild(component());
