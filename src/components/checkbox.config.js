module.exports = {
  context: {
    checkbox: {
      component_id: 'id-1',
      input_id: 'id-2',
      label: 'Checkbox Label',
      type: 'text',
      name: '',
      value: '',
      general_description: 'Here is a note for this checkbox.',
      general_description_id: 'id-3', // #1
      required: true, // #2
      invalid_description: 'This checkbox is required.',
      invalid_description_id: 'id-4' // #3
    }
  },
  notes: "See **checkbox.config.js** for how to toggle 'invalid' and 'required' checkbox states, including the description text during development."
}

// #1: Setting this from false to a unique ID simulates a description text with its ID added to the input's aria-describeby attribute.

// #2: Setting this from false to true makes the field required by adding the 'required' attribute to the input. This will then automatically add the 'is-required' class to c-checkbox via form-element-required.js.

// #3: Setting this from false to a unique ID simulates the 'invalid' checkbox state, including adding is-invalid class to c-checkbox and adding error text with its ID added to the input's aria-describeby. These actions are automatically set by the form validation script upon form error.
