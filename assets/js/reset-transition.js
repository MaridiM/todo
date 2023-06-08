(() => {
    /*
        set in body atribute
        data-load="true"
    */

    const body = document.querySelector('body')
    setTimeout(() => {
        body.setAttribute('data-load', false)
    }, 500)
})()