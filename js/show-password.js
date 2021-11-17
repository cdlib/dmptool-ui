// Show Password //
const initShowPassword = () => {
  const passwordField = document.querySelector('#js-password-field input')
  const checkboxToggle = document.querySelector('#js-password-toggle input')

  if (passwordField) {
    checkboxToggle.addEventListener('change', (e) => {
      if (checkboxToggle.checked) {
        passwordField.setAttribute('type', 'text')
      } else {
        passwordField.setAttribute('type', 'password')
      }
    })
  }
}

export default () => initShowPassword()
