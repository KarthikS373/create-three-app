const containsInvalidCharacters = (path: string) => {
  const regex = /[.~:/#[\]@$&'()*+,;=%]/g
  return regex.test(path)
}

export default containsInvalidCharacters
