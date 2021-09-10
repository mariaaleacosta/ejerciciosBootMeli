//punto 1: 

function computadora (ram, cpu, disco, monitor, gpu ){
    this.ram= ram;
    this.cpu= cpu;
    this.disco=disco;
    this.monitor=monitor;
    this.gpu=gpu;
}

let ordenador= new computadora('8gb','5hz','250GB','samsung',true);

console.log(ordenador); 

console.log('**************PUNTO 2**********************');


 let  computadoras= [
     {ram:'2gb',cpu:'2hz',disco:'10gb',monitor:'palitodos',gpu:false},
     {ram:'5gb',cpu:'5hz',disco:'14gb',monitor:'samsung',gpu:true},
     {ram:'9gb',cpu:'2hz',disco:'7gb',monitor:'lenovo',gpu:true},
     {ram:'1gb',cpu:'3hz',disco:'1gb',monitor:'sony',gpu:false},
     {ram:'2gb',cpu:'28z',disco:'50gb',monitor:'palito',gpu:false}

 ]

 console.log(computadoras.length+" " + " computadoras") ; 

for (let i = 0; i< computadoras.length; i+=1){
    console.log(computadoras[i]);
}

console.log('**************PUNTO 3**********************');
const arrayFiltrado = computadoras.filter(function(computadoras){
    return computadoras.gpu==true;
})

console.log(arrayFiltrado);


console.log('**************PUNTO 4**********************');

function litrosConsumo(kmConsumo){
    return( kmConsumo* 2)/100;
}


function calcularGasto(valorLitro, litrosConsumo){

    return valorLitro*litrosConsumo;

}
const kmConsumo= 150;
const valorLitro=3000;
const litrosConsumidos= litrosConsumo(kmConsumo);
const valorCosumido= calcularGasto(valorLitro,litrosConsumidos);
console.log('El precio del litro de nafta'+' '+ valorCosumido);



