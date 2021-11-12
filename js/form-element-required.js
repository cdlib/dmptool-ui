// Style Required Form Elements //

// If a Checkbox or Text Field component's <input> contains the 'required' attribute, add the 'is-required' class to the component's parent <div>. This will turn on the 'required' asterisk marker defined in the Checkbox/Text Field SCSS file:

const requiredField = document.querySelector('.js-login__required-field')
const textfields = document.querySelectorAll('.js-textfield')
const checkboxes = document.querySelectorAll('.js-checkbox')

const initFormElRequired = () => {
  const requiredFormElements = (formEls) => {
    for (const formEl of formEls) {
      if (formEl.querySelector('input').hasAttribute('required')) {
        requiredField.hidden = false
        formEl.classList.add('is-required')
      }
    }
  }

  requiredFormElements(textfields)
  requiredFormElements(checkboxes)
}

export default () => initFormElRequired()
