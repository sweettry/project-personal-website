// const array = ['Work', 'Create', 'Learn', 'Make']
// const action = 'Learn'
// const currentActionIndex = array.indexOf(action)
// const nextActionIndex = (currentActionIndex + 1) % 4
// const nextAction = array[nextActionIndex]
// console.log(currentActionIndex)
// console.log(nextActionIndex)
// console.log(nextAction)

const array = ['Work', 'Create', 'Learn', 'Make']
const currentActionIndex = array.indexOf(array[0])
const nextActionIndex = (currentActionIndex + 1) % 4
const nextAction = array[nextActionIndex]
console.log(currentActionIndex)
console.log(nextActionIndex)
console.log(nextAction)
