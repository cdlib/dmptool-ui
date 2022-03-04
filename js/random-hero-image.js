// Random Hero Image //

// Transform format, quality and size of original images using query parameters via Parcel (see: https://parceljs.org/recipes/image/):

import heroImg1 from '../images/hero/1-large.jpg?as=jpg&quality=30&width=1000'
import heroImg2 from '../images/hero/2-large.jpg?as=jpg&quality=30&width=1000'
import heroImg3 from '../images/hero/3-large.jpg?as=jpg&quality=30&width=1000'
import heroImg4 from '../images/hero/4-large.jpg?as=jpg&quality=30&width=1000'
import heroImg5 from '../images/hero/5-large.jpg?as=jpg&quality=30&width=1000'
import heroImg6 from '../images/hero/6-large.jpg?as=jpg&quality=30&width=1000'
import heroImg7 from '../images/hero/7-large.jpg?as=jpg&quality=30&width=1000'

const initRandomHeroImage = () => {
  if (document.querySelector('.c-calltoaction')) {
    const imgArr = [
      heroImg1,
      heroImg2,
      heroImg3,
      heroImg4,
      heroImg5,
      heroImg6,
      heroImg7
    ]
    const randomNum = Math.floor(Math.random() * imgArr.length)
    const heroImgEl = document.querySelector('.js-heroimage')
    const randomImg = `url('${imgArr[randomNum]}')`

    heroImgEl.style.setProperty('--hero-image', randomImg)
  }
}

export default () => initRandomHeroImage()
