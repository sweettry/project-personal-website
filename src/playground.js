import { computed } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// const route = useRoute()

const routes = router.options.routes
console.log(routes)
// console.log(route.name)

const [home, projects, resume, contacts] = routes
console.log(home, projects, resume, contacts)

const [var1, var2] = routes
console.log(var1.name, var2.path)
const names = ['Home, Projects', 'Resume', 'Contact']
const test = computed(() => {
  return function routeIndex() {
    let routes = router.options.routes
    let index
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].name === names[i]) {
        index = i
        break
      }
    }

    return index
  }
})
console.log(test)

// function routeIndex() {
//   let routes = router.options.routes
//   let index
//   for (let i = 0; i < routes.length; i++) {
//     if (routes[i].name == route.name) {
//       index = i
//       break
//     }
//   }

//   return index
// }
// console.log(routeIndex)
