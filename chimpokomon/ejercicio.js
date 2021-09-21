
function CuentaBancaria(nombre, numeroDeCuenta, apellido){
    this.nombre = nombre,
    this.numeroDeCuenta = numeroDeCuenta,
    this.apellido = apellido,
    this.saldo = 0,
    this.movimientos = [],

    this.mostrarNombre = () => `${this.nombre} ${this.apellido}`,

    this.debitarDinero = (montoADebitar, metodoDePago) =>{
      if(this.saldo < montoADebitar){
          console.log("No se pudo completar la operacion")
      }else{
          this.saldo -= montoADebitar
          console.log(`El saldo actual es de ${this.saldo}`)
          this.movimientos.push({
              montoDebitado: montoADebitar,
              metodoDePago: metodoDePago
        
        })
      }
    }

    this.acreditarDinero = (montoAAcreditar,metodoDePago) => {
        this.saldo += montoAAcreditar
        this.movimientos.push({
            montoAcreditado: montoAAcreditar,
            metodoDePago: metodoDePago
      
      })
        
        return "Dinero acreditado: " + montoAAcreditar;
    }

    this.mostrarSaldo = () => `El saldo actual es $${this.saldo}`

    this.mostrarMovimientos = () => this.movimientos

    this.mostrarAcreditacion = () => {
        let dineroAcreditadoTotal = 0
        for(let i = 0; i < this.movimientos.length; i++){
            if(this.movimientos[i].metodoDePago == "credito"){
                dineroAcreditadoTotal += this.movimientos[i].montoAcreditado
            }
        }
        return dineroAcreditadoTotal
    }
}

let cuentaBancaria1 = new CuentaBancaria("pepito", "1111", "perez")

console.log(cuentaBancaria1.acreditarDinero(200, "debito"))
console.log(cuentaBancaria1.acreditarDinero(400, "credito"))
console.log(cuentaBancaria1.acreditarDinero(500, "credito"))
console.log(cuentaBancaria1.mostrarMovimientos())
console.log(cuentaBancaria1.mostrarAcreditacion())
