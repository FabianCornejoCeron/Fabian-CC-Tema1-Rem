function ejercicio2(segundos){
    let segunds=0, minutos=0, horas=0;

        for(let i=1; i<=segundos; i++){
            segunds++;

            if(segunds == 60){
                minutos++;
                segunds=0;
            }
            if(minutos == 60){
                horas++;
                minutos=0;
                segunds=0;
            }
        }

    return horas.toString()+":"+minutos.toString()+":"+segunds.toString();
}

console.log(ejercicio2(8000));