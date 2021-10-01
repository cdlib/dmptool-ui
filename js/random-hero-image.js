// Random Hero Image //

// Transform format, quality and size of original images via Parcel (see: https://v2.parceljs.org/recipes/image/):

import heroImg1 from 'url:../images/hero/1-large.jpg?as=jpg&quality=30&width=1000'
import heroImg2 from 'url:../images/hero/2-large.jpg?as=jpg&quality=30&width=1000'
import heroImg3 from 'url:../images/hero/3-large.jpg?as=jpg&quality=30&width=1000'
import heroImg4 from 'url:../images/hero/4-large.jpg?as=jpg&quality=30&width=1000'
import heroImg5 from 'url:../images/hero/5-large.jpg?as=jpg&quality=30&width=1000'
import heroImg6 from 'url:../images/hero/6-large.jpg?as=jpg&quality=30&width=1000'
import heroImg7 from 'url:../images/hero/7-large.jpg?as=jpg&quality=30&width=1000'

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
