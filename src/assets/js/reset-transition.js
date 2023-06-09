(() => {
    /*
        set in body atribute
        data-load="true"
    */

    const body = document.querySelector('body')
    body.setAttribute('data-load', true)
    
    setTimeout(() => {
        body.setAttribute('data-load', false)
    }, 500)
})()