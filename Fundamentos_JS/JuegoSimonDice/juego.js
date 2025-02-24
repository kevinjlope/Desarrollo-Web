const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 2
//swal('Hola') ;
class Juego {
    constructor() {
        this.inicializar=this.inicializar.bind(this)
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
    }

    inicializar() {
    this.siguienteNivel = this.siguienteNivel.bind(this)
    this.elegirColor = this.elegirColor.bind(this)
    //this.toggleBtnEmpezar()
    btnEmpezar.classList.toggle('hide')
    this.nivel = 1
    this.colores = {
        celeste,violeta,naranja,verde
    }
    }
    /*toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide')

        }else{
            btnEmpezar.classList.add('hide')

        }
    }*/
    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random()*4))
    }
    siguienteNivel(){
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }
    transformarNumeroAcolor(numero){
        switch (numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    transformarColorAnumero(color){
        switch (color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }
    iluminarSecuencia(){
        for(let i = 0; i<this.nivel; i++ ){
            const color = this.transformarNumeroAcolor(this.secuencia[i])
            console.log(color)
            setTimeout(()=> this.iluminarColor(color), 1000*i)
           // this.nivel++;
        }
    }
    iluminarColor(color){
        //Se agrega una clase de css, para que se ilumine
        this.colores[color].classList.add('light')
        setTimeout(()=>this.apagarColor(color), 500)
    }
    apagarColor(color){
        this.colores[color].classList.remove('light')
    }
    agregarEventosClick(){
        this.colores.celeste.addEventListener('click',this.elegirColor)
        this.colores.verde.addEventListener('click',this.elegirColor)
        this.colores.violeta.addEventListener('click',this.elegirColor)
        this.colores.naranja.addEventListener('click',this.elegirColor)
    }
    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click',this.elegirColor)
        this.colores.verde.removeEventListener('click',this.elegirColor)
        this.colores.violeta.removeEventListener('click',this.elegirColor)
        this.colores.naranja.removeEventListener('click',this.elegirColor)
    }
    elegirColor(ev){
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.transformarColorAnumero(nombreColor)
        this.iluminarColor(nombreColor)
        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++
            if(this.subnivel === this.nivel){
                this.nivel++
                this.eliminarEventosClick()
                if(this.nivel === (ULTIMO_NIVEL+1)){
                    this.ganoElJuego()
                }else{
                    setTimeout(this.siguienteNivel,1500)
                }
            }
        } else{
            this.perdioElJuego()
        }
    }
    ganoElJuego(){
                //swal --> es una promesa
        swal('Platzi','Felicidades ganaste el juego','success')
        .then(this.inicializar)
    }

    perdioElJuego(){
                //swal --> es una promesa
        swal('Platzi','Perdiste :c','error')
        .then(()=>{
            this.inicializar
            this.eliminarEventosClick
        })
    }
}

function empezarJuego() {
    window.juego = new Juego()

}