let m             = 4 // filas
let n             = 4 // columnas
let myArray       = [];

myArray = crearArrayPosiciones(m,n)
console.table(crearSerieCaracol(myArray))

//[1]
function serie_numeros_impares(numero){
    //Ejemplo: serie_numeros_impares(9) = [1,3,5,9]
    let myArray = []
    for (var i = 1; i <= numero; i=i+2) {
        myArray.push(i)
    }
    return myArray
}
//[2]
function crearArrayPosiciones(numero_filas,numero_columnas){
    /*
    Este es el tipo de array que se desea construir
    let myArray = [ [1,1],[1,2],[1,3] , [2,1],[2,2],[2,3] , [3,1],[3,2],[3,3] ]
    */
    //let a = [[1,1],[1,2],[1,3]]

let a  = [];
let aa = [];
let m = numero_filas // filas
let n = numero_columnas // columnas

    for (var j = 1; j <= m; j++) {
        for (var i = 1; i <= n; i++) {
            a.push([j,i])    
        }
        aa.push(a)
        a = [];
    }
    console.table(aa)
    return aa
}
//[3]
function quitarBorde(array_1){
    let m  = [];
    let n  = [];
    m = array_1.length
    n = array_1[0].length

    let otroArray = array_1.slice(1,4);
    let output = []
    for (item in otroArray) {    
        output.push(otroArray[item].slice(1,n-1))
    }
    return output
}
//[4]
function recorrerBordeArray(array) {
    let y  = []  // columnas
    let x  = [] // filas
    let aa = array
    let serieBorde = []
    let m  = [];
    let n  = [];
    m = array.length
    n = array[0].length
    // Lectura del array siguiendo el borde

        // incrementa_y
        for (var i = 0; i < n; i++) {
            x = 0;
            y = i;
            serieBorde.push(aa[x][y]) 
            //console.log(aa[0][y])     
        }

        // incrementa_x
        for (var i = 0; i < m; i++) {
            x = i;
            serieBorde.push(aa[x][y]) 
            //console.log(aa[x][y])      
        }
        // decrementa_y
        for (var i = n-1; i >=0 ; i--) {
            y = i;
            serieBorde.push(aa[x][y]) 
            //console.log(aa[x][y])      
        }

        // decrementa_x
        for (var i = m-1; i >=0 ; i--) {
            x = i;
            serieBorde.push(aa[x][y]) 
            //console.log(aa[x][y])      
        }

return serieBorde

}
//[5]
function crearSerieCaracol(array_1){
    let m  = [];
    let n  = [];
    m = array_1.length    // filas
    n = array_1[0].length // columnas
    let serie_caracol = []
    //console.log(recorrerBordeArray(array_1))
    let serie_impar = serie_numeros_impares(m)
    for(item in serie_impar){
    serie_caracol = serie_caracol.concat(recorrerBordeArray(array_1));
    array_1       = quitarBorde(array_1);
    }
return serie_caracol
}