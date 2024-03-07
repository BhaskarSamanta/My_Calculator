let inpt=document.getElementById('InputBox');
let btn=document.querySelectorAll('button');

let res="";
let myarr=Array.from(btn);

myarr.forEach(button => {
    button.addEventListener('click',(e) =>{
        console.log(e.target);
        if(e.target.innerHTML === '='){
            if(res.includes('%')){
                let pars = res.indexOf('%');
                let frstelm = parseFloat(res.substring(0,pars));
                let scndelm = parseFloat(res.substring(pars+1, pars.length));      
                
                let ans = (frstelm*100)/scndelm;
                console.log(`first:${frstelm}\nsecond:${scndelm}\nans${ans}`);
                inpt.value = ans
            }

            else {res=eval(res);
            inpt.value=res;
            }
        }
        else if(e.target.innerHTML==='AC'){
            res="";
            inpt.value=res
        }
        else if(e.target.innerHTML==='Del'){
            res=res.substring(0,res.length-1);
            inpt.value=res;
        }
        else{ res += e.target.innerHTML;
        inpt.value = res;}
    })
})

