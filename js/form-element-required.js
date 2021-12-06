// Style Required Form Elements //

// If a Checkbox or Text Field component's <input> contains the 'required' attribute, add the 'is-required' class to the component's parent <div>. This will turn on the 'required' asterisk marker defined in the Checkbox/Text Field SCSS file:

const initFormElRequired = () => {
  const requiredField = document.querySelector('.js-login__required-field')
  const textfields = document.querySelectorAll('.js-textfield')
  const checkboxes = document.querySelectorAll('.js-checkbox')

  const requiredFormElements = (formEls) => {
    for (const formEl of formEls) {
      const input = formEl.querySelector('input')

      if (input.classList.contains('require-me')) {
        input.setAttribute('required', '')
        requiredField.hidden = false
        formEl.classList.add('is-required')
      }
    }
  }

  requiredFormElements(textfields)
  requiredFormElements(checkboxes)
}

export default () => initFormElRequired()
