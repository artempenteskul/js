'use strict';

const photosGallery = (title, dimensions, date) => {
    return {
        date,
        title,
        [dimensions]: true,
        info: function() {
            console.log(`Photo ${title} has dimensions ${dimensions}.`)
        },
        publishInfo: () => {
            console.log(`Photo was published ${Math.floor((new Date().getTime() - date.getTime()) / 1000)} seconds ago.`)
        }
    }
  }
  
const myDogPhoto = photosGallery(
    "My dog",
    "1920x1080",
    new Date()
)
  
const testDimension1 = "1920x1080"
const testDimension2 = "1080x720"
  
myDogPhoto.info()
  
setTimeout(() => myDogPhoto.publishInfo(), 2000)
  
console.log(myDogPhoto[testDimension1]) // true
console.log(myDogPhoto[testDimension2]) // undefined
