const limitToNumberOfCharacters = (number, string) => {
  if(string.length > number) {
    return string.substring(0,number) + '...'
  }

  return string
}

export default limitToNumberOfCharacters