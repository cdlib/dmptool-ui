module.exports = {
  label: 'Text Field',
  context: {
    textfield: {
      component_id: 'id-1',
      input_id: 'id-2',
      label: 'Text Field for a Name',
      type: 'text',
      name: '',
      autocomplete: 'name', // #1
      value: '',
      list: '',
      minlength: '',
      maxlength: '',
      general_description: 'More info about this field.',
      general_description_id: 'id-3', // #2
      required: true, // #3
      readonly: false,
      invalid_description: 'This field is required.',
      invalid_description_id: 'id-4' // #4
    }
  },
  notes: "See **textfield.config.js** for how to toggle 'invalid' and 'required' text field states, including the description text during development."
}

// #1: This identifies the input purpose (name, passord, organization, etc.) for accessibility. See list of valid values here: https://www.w3.org/TR/WCAG21/#input-purposes

// #2: Setting this from false to a unique ID simulates a description text with its ID added to the input's aria-describeby attribute.

// #3: Setting this from false to true makes the field required by adding the 'required' attribute to the input. This will then automatically add the 'is-required' class to c-textfield via form-element-required.js.

// #4: Setting this from false to a unique ID simulates the 'invalid' text field state, including adding is-invalid class to c-textfield, adding aria-invalid to the input (for accessibility), and adding error text with its ID added to the input's aria-describeby. These actions are automatically set by the form validation script upon form error.
