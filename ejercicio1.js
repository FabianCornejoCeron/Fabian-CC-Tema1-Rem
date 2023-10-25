function ejercicio1(radio, altura){
    const pi=3.1416;
    let area=0, volumen=0;
    
    area=(2*pi*radio*altura)+(2*pi*(radio*radio));
    volumen=(pi*(radio*radio))*altura;

    return [area.toFixed(2),volumen.toFixed(2)];
}

console.log(ejercicio1(5,10));