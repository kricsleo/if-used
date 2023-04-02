alert('hello')

(() => {
  function alert() {}
  alert('custom')
})()