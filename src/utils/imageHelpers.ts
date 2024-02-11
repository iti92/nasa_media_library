function imageSize() {
  const windowWidth = window.innerWidth;

  if (windowWidth < 600) {
    return 'small';
  } else if (windowWidth < 900) {
    return 'medium';
  } else if (windowWidth < 1200) {
    return 'large';
  }
  return 'orig';
}

function prepareImageUrl(urlList: string[]) {
  const preferableUrl = urlList.find(item => item.includes(imageSize()))

  if (preferableUrl) return preferableUrl;

  return urlList.find(item => !item.includes('thumbnail'))
}

export { imageSize, prepareImageUrl }