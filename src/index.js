import Please from 'pleasejs'

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept()
  }
  console.log('In development mode')
}

require('./styles.css') // The page is now styled

const div = document.getElementById('color')
const button = document.getElementById('button')
const changeColor = () => {
  div.style.backgroundColor = Please.make_color()
}

button.addEventListener('click', changeColor)
