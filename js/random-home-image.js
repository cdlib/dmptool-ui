// Random Home Image //

if (document.querySelector('.t-home')) {
  const imgArr = [
    '1-large.jpg',
    '2-large.jpg',
    '3-large.jpg',
    '4-large.jpg',
    '5-large.jpg'
  ]
  const randomNum = Math.floor(Math.random() * imgArr.length)
  const calltoactionComp = document.querySelector('#js-calltoaction')
  const imgLightness = 60
  const randomImg = imgArr[randomNum]

  calltoactionComp.style.backgroundImage = `linear-gradient(hsl(0, 0%, ${imgLightness}%), hsl(0, 0%, ${imgLightness}%)), url('../../ui-assets/images/${randomImg}')`
}
