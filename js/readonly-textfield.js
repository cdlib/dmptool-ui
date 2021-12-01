// Read-only Textfields //

const initReadonlyTextfield = () => {
  const textfields = document.querySelectorAll('.js-textfield')

  for (const textfield of textfields) {
    const input = textfield.querySelector('input')

    if (input.classList.contains('readonly')) {
      input.setAttribute('readonly', '')
      input.setAttribute('aria-disabled', true)
    }
  }
}

export default () => initReadonlyTextfield()
