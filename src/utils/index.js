const generateUniqueID = () => {
   return Math.random()
      .toString(36)
      .substr(2, 9)
}

const capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1)

const camelCaseToTitle = str =>
   str.slice(0, 1).toUpperCase() + str.slice(1).replace(/([A-Z])/g, ' $1')

export { capitalize, camelCaseToTitle, generateUniqueID }
