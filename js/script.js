const checkbox = document.querySelector('#checkbox');
// const element = document.querySelector('.hola'); 
checkbox.addEventListener('change', () => {
    //  document.body.classList.toggle ('dark');
    document.querySelector('header').classList.toggle ('dark');
    //document.header.classList.toggle ('dark');
})