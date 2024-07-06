let listElementS = document.querySelectorAll('.list_button--click');

listElementS .forEach(listElement => {
    listElement.addEventListener('click', () =>{
       
        listElement.classList.toggle('arrow');

        let height =0;
        let menu  = listElement .nextElementSibling;
        console.log()
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }
              menu.style.height = height+"px"
    })
});