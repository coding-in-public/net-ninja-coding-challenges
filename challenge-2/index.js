const input = document.querySelector('input');

const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

input.addEventListener('keydown', (e) =>{
  const isValid = emailRegex.test(e.target.value)
  isValid
    ? input.classList.add('valid')
    : input.classList.remove('valid')
})