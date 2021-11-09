module.exports = {
  collated: true,
  default: 'previous',
  context: {
    serialnav: {
      label: 'Back'
    }
  },
  variants: [
    {
      name: 'next',
      context: {
        serialnav: {
          label: 'Next'
        }
      }
    }
  ]
}
