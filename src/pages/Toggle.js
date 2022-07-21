const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

    $checkbox.addEventListener('change', funciton(){
        $html.classList.toggle('darkMode')
    })
