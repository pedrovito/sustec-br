const button = document.querySelector('button')
const popup = document.querySelector('.corpomapa')
const close = document.querySelector('.mapa_close')

    button.addEventListener('click', () =>{
        popup.style.display = 'block'
    })

    popup.addEventListener('click', event =>{
        const classNameOfClickedElement = event.target.classList[0]

        if(classNameOfClickedElement === 'imagempop' || classNameOfClickedElement ==='mapa_close' ){
            popup.style.display='none'
        }
        console.log(classNameOfClickedElement)
        
    })