function component() {
  const element = document.createElement('pre');
  element.innerText = 'Hello, webpack';
  const a = [1, 3]
  alert('json', ...a)
  return element;
}

document.body.appendChild(component());
