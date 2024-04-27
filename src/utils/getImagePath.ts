export function getImagePath(imagePath:string) {
  const cloudinary = 'https://res.cloudinary.com'
  if(imagePath.startsWith(cloudinary)){
    return imagePath
  }else{
    return `/products/${imagePath}.jpg`
  }
}