const download=document.querySelectorAll("[data-download]")

download.forEach(button=>{
    const id=button.dataset.download;
    const image=document.querySelector('.photo');
    const a=document.createElement('a');
    a.href=image.src;
    a.download="";
    a.style.display='none';

    button.addEventListener('click',()=>{
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    })

})