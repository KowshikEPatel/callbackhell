
function createDomMani(...arr){
    var element1=document.createElement(arr[0]);
    for(let iter=1;iter<arr.length;iter++){
        if(arr[iter].includes("=")){
        let attreibute,attributename;
        [attreibute,attributename]=arr[iter].split("=");
        element1.setAttribute(attreibute,attributename);
        }
        else{
            element1.innerHTML=arr[iter];
       }    
    }
    return element1;
}
let divElement1=createDomMani("div","style=font-size:130px","Call Back Hell Task");
let divElement=createDomMani("div","style=font-size:130px","id=onlyText");

document.body.append(divElement1,divElement);

setTimeout(() =>{
    document.getElementById("onlyText").textContent="10"; 
    setTimeout(()=>{
        document.getElementById("onlyText").textContent="9";
        setTimeout(()=>{
            document.getElementById("onlyText").textContent="8";
            setTimeout(() => {
                document.getElementById("onlyText").textContent="7"; 
                setTimeout(() => {
                    document.getElementById("onlyText").textContent="6";
                    setTimeout(() => {
                        document.getElementById("onlyText").textContent="5"; 
                        setTimeout(() => {
                            document.getElementById("onlyText").textContent="4";
                            setTimeout(() => {
                                document.getElementById("onlyText").textContent="3";
                                setTimeout(() => {
                                    document.getElementById("onlyText").textContent="2";
                                    setTimeout(() => {
                                        document.getElementById("onlyText").textContent="1";
                                        setTimeout(() => {
                                            document.getElementById("onlyText").textContent="0"; 
                                            document.getElementById("onlyText").textContent="Happy New Year"; 
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);  
                }, 1000);
            }, 1000);
        },1000);
    },1000);
},1000);


