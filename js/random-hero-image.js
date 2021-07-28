// Random Hero Image //

// Transform source images to reduce file sizes via Parcel (see: https://v2.parceljs.org/recipes/image/):
const initRandomHeroImage = () => {
  if (document.querySelector('.t-home')) {
    // Rails adds it's thumb printed links to the images into a JSON array
    images = document.querySelector('#js-heroimage__images').value

console.log(images);
console.log(images[0]);
console.log(images.value);

    let imgArr = JSON.parse(`${images}`)

    const randomNum = Math.floor(Math.random() * imgArr.length)
    const heroImgEl = document.querySelector('.js-heroimage')
    const imgLightness = 60
    const randomImg = imgArr[randomNum]
    const compositeImg = `linear-gradient(hsl(0, 0%, ${imgLightness}%), hsl(0, 0%, ${imgLightness}%)), url('${randomImg}')`

    heroImgEl.style.setProperty('--hero-image', compositeImg)
  }
}

export default () => initRandomHeroImage()