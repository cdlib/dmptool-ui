// Form Validation //

import getLocalizedString from './rails-locale'

const initFormValidation = () => {
  const loginForm = document.querySelector('.js-login form')
  const formErrorMessage = document.querySelector('.js-login__invalid-notification')
  const formSubmitButton = document.querySelector('.js-login button[type="submit"]')
  const textfields = document.querySelectorAll('.js-textfield')
  const checkboxes = document.querySelectorAll('.js-checkbox')
  let errorCounter = 0

  if (loginForm) {
    const validateFormComponents = (formComps) => {
      loginForm.addEventListener('submit', (event) => {
        for (const formComp of formComps) {
          const formInput = formComp.querySelector('input')
          const invalidMessage = formComp.querySelector('.js-invalid-description')
          const randomErrorId = 'error_' + Math.floor(Math.random() * 99999)

          // Provide custom error message depending on input type and type of error:

          const showErrors = () => {
            if (formInput.getAttribute('type') === 'email') {
              if (formInput.validity.typeMismatch) {
                // invalidMessage.textContent = 'Please enter a valid email address.'
                invalidMessage.textContent = getLocalizedString('invalidEmail')
              }
              if (formInput.validity.valueMissing) {
                // invalidMessage.textContent = 'Please enter an email address.'
                invalidMessage.textContent = getLocalizedString('blankEmail')
              }
            }

            if (formInput.getAttribute('type') === 'checkbox') {
              if (formInput.validity.valueMissing) {
                invalidMessage.textContent = getLocalizedString('blankCheckbox')
              }
            }

            // We need to check the 'autocomplete' attribute for its 'password' value instead of the 'type' attribute, since this value can get toggled from 'password' to 'text' when the 'show password' checkbox is checked:

            if (formInput.getAttribute('autocomplete') === 'password') {
              if (formInput.validity.tooShort) {
                invalidMessage.textContent = getLocalizedString('invalidPassword')
              }
              if (formInput.validity.valueMissing) {
                invalidMessage.textContent = getLocalizedString('blankPassword')
              }
            }

            if (formInput.getAttribute('type') === 'text') {
              if (formInput.validity.valueMissing) {
                const labelText = formComp.querySelector('label').textContent.toLowerCase()
                invalidMessage.textContent = getLocalizedString('blankField', labelText)
              }
            }
          }

          // Use plural error message if error count is greater than 1:

          const reportErrors = () => {
            let errorNumber = 'field'

            if (errorCounter > 1) {
              errorNumber = `${errorCounter}`
            }

            formErrorMessage.textContent = getLocalizedString('invalidForm', errorNumber)
          }

          // If the input is not valid:

          if (!formInput.validity.valid) {
            // Prevent repeated error additions by incrementing counter only if invalid state is not already set:

            if (formComp.classList.contains('is-invalid') === false) {
              errorCounter = ++errorCounter
            }

            reportErrors()

            // Drop the cursor into the first form input containing an error:

            if (errorCounter === 1) {
              formInput.focus()
            }

            formErrorMessage.hidden = false
            formErrorMessage.classList.remove('errors-fixed')
            formComp.classList.add('is-invalid')
            formInput.setAttribute('aria-invalid', true)
            invalidMessage.hidden = false
            invalidMessage.setAttribute('id', randomErrorId)
            formSubmitButton.setAttribute('aria-disabled', true)

            // If there's already an 'aria-describedby' attribute, append its value with the randomErrorID, but only if randomErrorID is not already there. If the attribute isn't already present, then add it with the randomErrorID:

            if (formInput.getAttribute('aria-describedby')) {
              if (!formInput.getAttribute('aria-describedby').includes(randomErrorId)) {
                formInput.setAttribute('aria-describedby', randomErrorId + ' ' + formInput.getAttribute('aria-describedby'))
              }
            } else {
              formInput.setAttribute('aria-describedby', randomErrorId)
            }

            showErrors()

            // Prevent the submit button from submitting the form:

            event.preventDefault()
          }

          // Remove error states on each form element as they are corrected:

          formInput.addEventListener('input', (event) => {
            if (formInput.validity.valid) {
              // Prevent repeated error subtractions by decrementing error counter only if invalid state is currently set:

              if (formComp.classList.contains('is-invalid') === true) {
                errorCounter = --errorCounter
              }

              reportErrors()

              // When no more errors are counted, update the error message and submit button with 'all fixed' text/styles.

              if (errorCounter === 0) {
                formErrorMessage.classList.add('errors-fixed')
                formErrorMessage.textContent = getLocalizedString('validForm')
                formSubmitButton.setAttribute('aria-disabled', false)
              }

              formComp.classList.remove('is-invalid')
              formInput.removeAttribute('aria-invalid')
              invalidMessage.hidden = true
              formInput.setAttribute('aria-describedby', formInput.getAttribute('aria-describedby').replace(randomErrorId, ''))
            }
          })
        }
      })
    }
    validateFormComponents(textfields)
    validateFormComponents(checkboxes)

    // Rails' form helpers will not let you set the novalidate attribute, so we use
    // a class instead and then set the attribute here
    if (loginForm.classList.contains('novalidate')) {
      loginForm.setAttribute('novalidate', '')
    }
  }
}

export default () => initFormValidation()
