// Temporary idea of extracting all LocalStorage logic
export const getNotes = (keyName) => {
  localStorage.getItem(keyName)
}

export const addNote = (keyName, keyValue) => {
  localStorage.setItem(keyName, keyValue)
}

export const removeNote = (keyName) => {
  localStorage.removeItem(keyName)
}