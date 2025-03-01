let result = document.querySelector('.result');
let inp = document.getElementById('outbout')
function Ajouter(){
    if (inp.value != "") {
        let p = document.createElement('div')
        let para = document.createElement('p')
        para.innerHTML = inp.value 
        let btn = document.createElement('button')
        btn.innerHTML = `<i class="fa-solid fa-trash"></i>`
        p.appendChild(para)
        p.appendChild(btn)
        btn.style.padding = "15px"
        p.style.display = 'flex'
        p.style.justifyContent = "space-between"
        p.style.alignItems = 'center'
        p.style.borderBottom = "1px solid rgba(128, 128, 128, 0.541)"
        p.style.padding = "10px"
        result.appendChild(p)
        btn.addEventListener('click',function(){
            p.remove()
        })
        para.addEventListener('click',function(){
            para.classList.toggle('active')
        })
        inp.value = ""
    }
    else{
        alert("Please Enter a Task")
    }
}