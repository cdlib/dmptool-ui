// Provides access to localized strings
//
// The DMPTool Rails application keeps track of the user's locale and has built in
// translations from 'en' to: 'de', 'en-CA', 'en-GB', 'en-US', 'es', 'fi', 'fr-CA',
//                            'fr-FR', 'pt-BR', 'sv-FI' and 'tr-TR'
//
// This module returns the correct version of a string based on the current user's
// locale. To accomplish this, we send a key and optional variable text.
// For example:
//
//    getLocalizedString(blankCheckbox) -> 'Por favor, verifique esta caixa.'
//    getLocalizedString(invalidForm, 4) -> 'Please correct the 4 fields below:'
//
// The list of known localization keys (along with examples) are:
//    - SIGN_IN_UP_BLANK_CHECKBOX     'Please check this box.'
//    - SIGN_IN_UP_BLANK_EMAIL        'Please enter an email address.'
//    - SIGN_IN_UP_BLANK_PASSWORD     'Please enter a password.'
//
//    - SIGN_IN_UP_INVALID_EMAIL      'Please enter a valid email address.'
//    - SIGN_IN_UP_INVALID_FIELD      'Please complete this %<variableText>s field.'
//    - SIGN_IN_UP_INVALID_FORM       'Please correct the %<variableText>s fields below:'
//    - SIGN_IN_UP_INVALID_PASSWORD   'Please enter a password of at least 8 characters.'
//
//    - SIGN_IN_UP_VALID_FORM         'Ready to submit:'
//
// The definitive list of available keys can be found in the following file in the
// dmptool repo: /app/views/branded/layouts/_json_constants.html.erb
//

// Some defaults so that things display on the dmptool-ui pages
const _defaultStrings = {
  SIGN_IN_UP_FIELD: 'field',
  SIGN_IN_UP_FIELDS: 'fields',
  SIGN_IN_UP_BLANK_CHECKBOX: 'Please check this box.',
  SIGN_IN_UP_BLANK_EMAIL: 'Please enter an email address.',
  SIGN_IN_UP_BLANK_PASSWORD: 'Please enter a password.',
  SIGN_IN_UP_INVALID_EMAIL: 'Please enter a valid email address.',
  SIGN_IN_UP_INVALID_FIELD: 'Please complete this %<variableText>s field.',
  SIGN_IN_UP_INVALID_FORM: 'Please correct the %<variableText>s below:',
  SIGN_IN_UP_INVALID_PASSWORD: 'Please enter a password of at least 8 characters.',
  SIGN_IN_UP_VALID_FORM: 'Ready to submit:'
}

// Function that takes in a key from the _localizedStrings JSON object above
// and returns the correct translation for the user's current locale
export default function getLocalizedString (key, variableText) {
  let localizedString = ''
  let string = 'Undefined String'

  // getConstant is defined in the DMPTool Rails application in
  // the /app/javascript/utils/getConstant.js file
  if (key && (typeof getConstant !== 'undefined')) {
    localizedString = getConstant(key) // eslint-disable-line no-undef
    if (localizedString) {
      string = localizedString
    }
  } else {
    // getConstant was not defined or no key was specified
    string = _defaultStrings.hasOwnProperty(key) ? _defaultStrings[key] : 'Undefined String' // eslint-disable-line no-prototype-builtins
  }

  // If variableText was specified and the string has a placeholder for it, then
  // swap in the variableText
  if (string.includes('%<variableText>s') && variableText) {
    return string.replace('%<variableText>s', variableText)
  } else {
    return string
  }
}
