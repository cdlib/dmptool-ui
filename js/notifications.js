// Notifications Close Control //

const notifInfo = document.querySelector('#js-notification-info')
const notifWarning = document.querySelector('#js-notification-warning')
const notifDanger = document.querySelector('#js-notification-danger')

const initNotifications = () => {
  const notification = notifType => {
    if (notifType) {
      const notifClose = notifType.querySelector('#js-notification-close')
      notifClose.addEventListener('click', () => {
        notifType.hidden = true
      })
    }
  }

  notification(notifInfo)
  notification(notifWarning)
  notification(notifDanger)
}

export default () => initNotifications()
