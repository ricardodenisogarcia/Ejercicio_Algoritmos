var lista = [];
var vueltas = 1;

for (var posicion = 0; posicion < 40; posicion++){
var random = Math.random();
var randomMulti = random * 1000;
var randomEntero = Math.floor(randomMulti);
lista.push(randomEntero);
}

function intercambio(indexA, indexB){
    var aux = lista[indexA];
    lista[indexA] = lista[indexB];
    lista[indexB] = aux;

    console.log(vueltas++, "-", indexA, indexB, "intercambiando", aux, lista[indexA]); //para ver las vueltas que da y
    // que hace en cada vuelta.
}

function burbuja(){
    var n, i, k;
    n = lista.length;
    for (k = 0; k < n ; k++){
        for (i = 0; i < n-1; i++){
            if (lista[i] > lista[i+1]){
                intercambio(i, i+1); 
            }
        }
    }
    //console.log("lista ordenada:" + lista);
    return lista
}

console.log("Lista desordenada: " + lista);
console.log("lista ordenada: " + burbuja(lista));
