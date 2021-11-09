const faker = require('faker/locale/en')

module.exports = {
  collated: true,
  default: 'Step A',
  label: 'Login Sequence',
  context: {
    textfield: {
      component_id: 'login-email',
      input_id: 'email_1',
      label: 'Email address',
      type: 'email',
      autocomplete: 'email',
      required: true,
      general_description_id: 'description_1',
      general_description: 'For SSO, use institutional address.'
    },
    button: {
      type: 'submit',
      text: 'Continue'
    }
  },
  variants: [
    {
      name: 'B',
      label: 'Step B',
      context: {
        textfield: {
          input_id: 'email_2',
          label: 'Email address',
          type: 'email',
          autocomplete: 'email',
          required: false,
          value: faker.internet.exampleEmail(),
          general_description_id: false
        },
        button: {
          type: 'submit',
          text: 'Sign In with Institution to Continue'
        },
        serialnav: {
          label: 'Go Back'
        }
      }
    },
    {
      name: 'C',
      label: 'Step C',
      context: {
        textfield: {
          input_id: 'email_3',
          label: 'Email address',
          type: 'email',
          autocomplete: 'email',
          required: false,
          value: faker.internet.exampleEmail(),
          general_description_id: false
        },
        button: {
          type: 'submit',
          text: 'Sign In with Institution to Continue'
        },
        serialnav: {
          label: 'Go Back'
        }
      }
    },
    {
      name: 'D',
      label: 'Step D',
      context: {
        email: {
          textfield: {
            input_id: 'email_4',
            label: 'Email address',
            type: 'email',
            autocomplete: 'email',
            value: faker.internet.exampleEmail()
          }
        },
        password: {
          textfield: {
            input_id: 'pass_1',
            label: 'Password',
            type: 'password',
            autocomplete: 'password',
            minlength: 8,
            required: true
          }
        },
        button: {
          type: 'submit',
          text: 'Sign In'
        },
        serialnav: {
          label: 'Go Back'
        }
      }
    },
    {
      name: 'E',
      label: 'Step E',
      context: {
        email: {
          textfield: {
            input_id: 'email_5',
            label: 'Email address',
            type: 'email',
            name: 'email',
            autocomplete: 'email',
            value: faker.internet.exampleEmail(),
          }
        },
        firstname: {
          textfield: {
            input_id: 'first_1',
            label: 'First name',
            type: 'text',
            name: 'firstname',
            autocomplete: 'given-name',
            required: true,
          }
        },
        lastname: {
          textfield: {
            input_id: 'last_1',
            label: 'Last name',
            type: 'text',
            name: 'lastname',
            autocomplete: 'family-name',
            required: true,
          }
        },
        institution: {
          datalist: {
            id: 'the-datalist-id'
          },
          textfield: {
            component_id: 'js-inst-textfield',
            input_id: 'inst_1',
            label: 'Institution',
            type: 'text',
            name: 'institution',
            autocomplete: 'off',
            list: 'the-datalist-id',
            required: true,
          }
        },
        not_listed: {
          checkbox: {
            component_id: 'js-unlisted-checkbox',
            input_id: 'listed_1',
            label: 'My institution is not on the list',
            name: 'unlisted',
            value: 'true'
          }
        },
        password: {
          textfield: {
            component_id: 'js-password-field',
            input_id: 'pass_1',
            label: 'Password',
            sublabel: '(at least 8 characters)',
            type: 'password',
            name: 'password',
            autocomplete: 'password',
            minlength: 8,
            required: true
          }
        },
        show_password: {
          checkbox: {
            component_id: 'js-password-toggle',
            input_id: 'show_1',
            label: 'Show password',
          }
        },
        terms: {
          checkbox: {
            input_id: 'terms_1',
            label: 'I accept the terms and conditions',
            name: 'terms',
            value: 'Terms and conditions accepted.',
            required: true
          }
        },
        button: {
          type: 'submit',
          text: 'Sign Up'
        },
        serialnav: {
          label: 'Go Back'
        }
      }
    }
  ]
}
