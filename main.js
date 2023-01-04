const navToggle = document.getElementById('nav-toggle')
const primaryNavigation = document.getElementById('primary-navigation')
const navToggleIcon = document.querySelectorAll('#nav-toggle img')
const navLists = document.querySelectorAll('.nav-list__items')


navToggle.addEventListener('click', ()=> {
    navToggleCheck()

})
navLists.forEach(item=> {
    item.addEventListener('click', ()=> {
        navToggleCheck()
    })
})

function navToggleCheck() {
    let openState = navToggle.getAttribute('aria-expanded')
    if(openState === 'false') {
        navToggle.setAttribute('aria-expanded', 'true')
        primaryNavigation.setAttribute('data-visible', 'true')
        navToggleIcon.forEach(icon => {
            icon.classList.toggle('open')
        })
    } else {
        navToggle.setAttribute('aria-expanded', 'false')
        primaryNavigation.setAttribute('data-visible', 'false')
        navToggleIcon.forEach(icon => {
            icon.classList.toggle('open')
        })
    }
}





