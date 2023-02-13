const techs = document.querySelectorAll('header i')
const timer = document.querySelector('#timer')
techs.forEach(tech => {
     tech.addEventListener('mouseenter', () => {
          tech.parentNode.querySelector('div').classList.remove('hidden')
     })
     tech.addEventListener('mouseout', () => {
          tech.parentNode.querySelector('div').classList.add('hidden')
     })
})
setInterval(() => {
     timer.innerHTML = new Date().toLocaleString()
}, 100)