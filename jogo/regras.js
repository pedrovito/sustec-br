const button = document.querySelector('#butaojogor')
const popupREGRA = document.querySelector('.regrado')
const popupREGRAdo = document.querySelector('.regrapopup')

button.addEventListener('click', () =>{
    popupREGRA.style.display = 'block'
})

popupREGRA.addEventListener('click', event =>{
    const classNameOfClickedElement = event.target.classList[0]

    if(classNameOfClickedElement === 'regrado' || classNameOfClickedElement ==='regrapopup'){
        popupREGRA.style.display = 'none'
    }
    console.log(classNameOfClickedElement)
    
})