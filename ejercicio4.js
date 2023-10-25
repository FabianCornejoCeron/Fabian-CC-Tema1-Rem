function ejercicio4(sueldo) {
    let aum = 0;
    let nuevo_sueldo = 0;

    if (sueldo < 1000) {
         aum = (0.15 * sueldo);
    } else{
        aum = (0.12 * sueldo);
    }

        nuevo_sueldo = (sueldo + aum);
     
    return nuevo_sueldo.toFixed(2);
}

console.log(ejercicio4(1100));