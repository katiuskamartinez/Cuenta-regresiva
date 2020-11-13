document.addEventListener("DOMContentLoaded",e=>{
    cuentaRegresiva("cuenta-regresiva","january 20,2021 06:45:19","FELIZ CUMPLEAÑOS A MÍ");
    })
function cuentaRegresiva(id,fechaLimite,mensajeFinal){
    const $cuenta=document.getElementById(id),
    cuentaDate=new Date(fechaLimite).getTime();

    let cuentaRegresivaTempo=setInterval(() => {
        let now=new Date().getTime()
        limiteTime=cuentaDate-now,
        dias=Math.floor(limiteTime/(1000*60*60*24)),
        horas=("0"+Math.floor((limiteTime%(1000*60*60*24))/(1000*60*60))).slice(-2);
        minutos=("0"+Math.floor((limiteTime%(1000*60*60))/(1000*60))).slice(-2);
        segundos=("0"+Math.floor((limiteTime%(1000*60))/1000)).slice(-2);

        $cuenta.innerHTML=`<h2>faltan: ${dias}dias ${horas}horas ${minutos}minutos ${segundos} segundos</h2>`;
        if(limiteTime<0){
            clearInterval(cuentaRegresivaTempo)
        }
    }, 1000);   
}