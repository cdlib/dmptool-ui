// Function to fetch the current user's locale setting from a function defined in the
// DMPTool's app/javascript/src/utils/getConstant.js. Rails keps track of the user's
// locale
const _getCurrentLocale = () => {
  let currentLocale = 'en'

  // If the getConstant function is defined then fetch the current locale
  if (typeof getConstant !== 'undefined') {
    currentLocale = getConstant('CURRENT_LOCALE')
    if (currentLocale.length >= 2) {
      currentLocale = currentLocale.substring(0, 2)
    }
  }
  return currentLocale
}

// JSON containing our translatable strings
const _localizedStrings = {
  blankCheckbox: {
    en: 'Please check this box.',
    pt: 'Por favor, verifique esta caixa.'
  },
  blankEmail: {
    en: 'Please enter an email address.',
    pt: 'Por favor, digite um endereço de e-mail.'
  },
  blankPassword: {
    en: 'Please enter a password.',
    pt: 'Por favor, digite uma senha.'
  },
  invalidEmail: {
    en: 'Please enter a valid email address.',
    pt: 'Por favor, insira um endereço de e-mail válido.'
  },
  invalidField: {
    en: 'Please complete this ${variable_text} field.',
    pt: 'Por favor, complete este campo ${variable_text}.'
  },
  invalidForm: {
    en: 'Please correct the ${variable_text} fields below:',
    pt: 'Por favor, corrija os campos ${variable_text} abaixo:'
  },
  invalidPassword: {
    en: 'Please enter a password of at least 8 characters.',
    pt: 'Digite uma senha de pelo menos 8 caracteres.'
  },
  validForm: {
    en: 'Ready to submit:',
    pt: 'Pronto para enviar:'
  },
}

// Function that takes in a key from the _localizedStrings JSON object above
// and returns the correct translation for the user's current locale
export default function getLocalizedString(key, variable_text) {
  const locale = _getCurrentLocale()

  if (locale && key) {
    if (_localizedStrings.hasOwnProperty(key) && _localizedStrings[key].hasOwnProperty(locale)) {
      console.log(`LOCALE IS: ${locale} -- ${key}`)
      console.log(_localizedStrings[key])

      const localizedString = _localizedStrings[key][locale]

      if (localizedString.includes('${variable_text}') && variable_text) {
        return localizedString.replace('${variable_text}', variable_text)
      } else {
        return localizedString
      }
    } else {
      return `Unable to find translation of '${key}' for the '${locale}' locale`
    }
  } else {
    return 'Unable to translate string!';
  }
}
