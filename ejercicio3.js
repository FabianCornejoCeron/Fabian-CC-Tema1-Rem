function ejercicio3(l1,l2,l3){
    let s, area;
    s=(l1+l2+l3)/2;
    area=Math.sqrt(s*(s-l1)*(s-l2)*(s-l3));

    return area.toFixed(2);
}

console.log(ejercicio3(8,15,17));