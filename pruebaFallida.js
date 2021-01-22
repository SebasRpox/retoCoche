var frm = false;
var neutro = true;
var estado = false;
var destino = false;
var recorridoCompletado = 0;
function encender() {

    if (frm == true && neutro == true && estado == false) {
        estado = true;
        document.getElementById("change").innerHTML = "N";
        document.getElementById("state").innerHTML = "El motor del coche Dodge RAM esta encendiendo...";
        function wait() {
            document.getElementById("state").innerHTML = "El coche Dodge RAM esta encendido";
        }
        setTimeout(wait, 3E3);
    } else if (frm == false && neutro == false) {
        document.getElementById("state").innerHTML = "El freno de mano esta desactivado";
        document.getElementById("state2").innerHTML = " Y el coche Dodge RAM no esta en neutro";
    } else if (frm == false && movimiento == false) {
        document.getElementById("state").innerHTML = "El freno de mano esta desactivado";
    } else if (estado == true && movimiento == false) {
        document.getElementById("state").innerHTML = "El coche Dodge RAM ya esta encendido";
    } else if (movimiento == true) {
        document.getElementById("state").innerHTML = "No puedes apagar el coche mientras nos movemos!";
    } else if (movimiento == false && frm == true && neutro == true) {
        document.getElementById("state").innerHTML = "Apagando coche...";
        function wait() {
            document.getElementById("state").innerHTML = "El coche Dodge RAM esta apagado";
            document.getElementById("state2").innerHTML = "Hasta luego";
            function wait2() {
                document.getElementById("state").innerHTML = "";
                document.getElementById("state2").innerHTML = "";
            }
            setTimeout(wait2, 2E3);
        }
        setTimeout(wait, 3E3);
    }
    else {
        document.getElementById("state").innerHTML = "El coche Dodge RAM no esta en neutro";
    }
}
var distancia = 0;
var tiempoParada = 0;
var mParada = 0;
var numParadas = 0;
function parada() {
    if (estado == true && movimiento == false && destino == false) {
        numParadas = Math.floor(Math.random() * (4 - 1) + 1);
        distancia = Math.floor(Math.random() * (11 - 2) + 2);
        tiempoParada = Math.floor(Math.random() * (6 - 1) + 1);
        mParada = (Math.floor(Math.random() * ((distancia + 1) - 1) + 1)) * 1000;
        //console.log(mParada);
        document.getElementById("state3").innerHTML = "Paradas: " + numParadas;
        document.getElementById("state4").innerHTML = "Distancia: " + distancia + "Km";
        destino = true;
    } else if (destino == true) {
        document.getElementById("destello").innerHTML = "Ya existe un destino";
        function wait() {
            document.getElementById("destello").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    } else if (estado == false) {
        document.getElementById("destello").innerHTML = "El coche esta apagado";
        function wait() {
            document.getElementById("destello").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    }
}
function frenoMano() {
    if (frm == true && movimiento == false) {
        frm = false;
        document.getElementById("destello").innerHTML = "Freno de mano desactivado";
        function wait() {
            document.getElementById("destello").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    } else if (frm == false && movimiento == false) {
        frm = true;
        document.getElementById("destello").innerHTML = "Freno de mano activado";
        function wait() {
            document.getElementById("destello").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    } else if (movimiento == false && neutro == true) {
        frm = true;
        document.getElementById("destello").innerHTML = "Freno de mano activado";
        function wait() {
            document.getElementById("destello").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    } else {
        document.getElementById("state").innerHTML = "Wow cuidado, debes frenar lentamente a esta velocidad!";
    }
}
var m = 0;
var i = 0;
var y;
var x;
var movimiento = false;
var freno = false;
function arrancar() {
    if (frm == false && neutro == true && estado == true && destino == true && movimiento == false && estacionado == false) {
        document.getElementById("change").innerHTML = "1";
        recorridoCompletado = distancia * 1E3;
        console.log(recorridoCompletado);
        document.getElementById("state").innerHTML = "Arrancando...";
        neutro = false;
        movimiento = true;
        function wait() {
            document.getElementById("state").innerHTML = "Feliz viaje <3";
            function wait2() {
                document.getElementById("state").innerHTML = "";
                function wait3() {
                    frenadoAzar();
                }
                setTimeout(wait3, 10E3);
            }
            setTimeout(wait2, 2E3);
        }
        setTimeout(wait, 2E3);

        function andar() {
            movimiento = true;
            m += 5;
            i += 1;
            document.getElementById("state6").innerHTML = i + "Km";
            document.getElementById("state5").innerHTML = "Distancia recorrida: " + m + " metros";
            console.log(recorridoCompletado);
            if (i >= recorridoCompletado) {

                document.getElementById("state").innerHTML = "Destino alcanzado, frenando...";
                function wait() {
                    clearInterval(y);
                    clearInterval(x);
                    document.getElementById("state").innerHTML = "Reversando...";
                    function wait2() {
                        document.getElementById("state").innerHTML = "Por favor ponga el freno de mano";
                        document.getElementById("state2").innerHTML = "para apagar el vehiculo";
                        movimiento = false;
                        neutro = true;
                        if (frm == true) {
                            document.getElementById("state").innerHTML = "Puede apagar el vehiculo";
                            document.getElementById("state2").innerHTML = "";
                        }
                    }
                    setTimeout(wait2, 4E3);
                }
                setTimeout(wait, 2E3);
            }
            if (frm == true && movimiento == false) {
                clearInterval(y);
                clearInterval(x);
            }
            if (i >= 25 && i <= 49) {
                document.getElementById("change").innerHTML = "2";
            } else if (i >= 50 && i <= 74) {
                document.getElementById("change").innerHTML = "3";
                m += 8;
            } else if (i >= 75 && i <= 99) {
                document.getElementById("change").innerHTML = "4";
                m += 10;
            } else if (i >= 100 && i <= 199) {
                document.getElementById("change").innerHTML = "5";
                m += 15;
            } else if (i >= 200) {
                document.getElementById("state6").innerHTML = "200Km";
                m += 20;
                i += 500;
            }/* else if (mParada >= m && numParadas != 0) {
                numParadas -= 1;
                frenadoAzar();
            }  */
        }
        y = setInterval(andar, 500);
        x = setInterval(andar, 500);

    } else if (movimiento == true) {
        document.getElementById("destello").innerHTML = "En movimiento";
        y = setInterval(andar, 500);
        x = setInterval(andar, 500);
        function wait() {
            document.getElementById("destello").innerHTML = "";
        }
        setTimeout(wait, 2E3);
        function andar() {
            movimiento = true;
            m += 5;
            i += 1;
            document.getElementById("state6").innerHTML = i + "Km";
            document.getElementById("state5").innerHTML = "Distancia recorrida: " + m + " metros";
            console.log(recorridoCompletado);
            if (i >= recorridoCompletado) {
                document.getElementById("state").innerHTML = "Destino alcanzado, frenando...";
                function wait() {
                    clearInterval(y);
                    clearInterval(x);
                    document.getElementById("state").innerHTML = "Reversando...";
                    function wait2() {
                        document.getElementById("state").innerHTML = "Por favor ponga el freno de mano";
                        document.getElementById("state2").innerHTML = "para apagar el vehiculo";
                        movimiento = false;
                        neutro = true;
                        if (frm == true) {
                            document.getElementById("state").innerHTML = "Puede apagar el vehiculo";
                            document.getElementById("state2").innerHTML = "";
                        }
                    }
                    setTimeout(wait2, 4E3);
                }
                setTimeout(wait, 2E3);
            }
            if (frm == true && movimiento == false) {
                clearInterval(y);
                clearInterval(x);
            }
            if (i >= 25 && i <= 49) {
                document.getElementById("change").innerHTML = "2";
            } else if (i >= 50 && i <= 74) {
                document.getElementById("change").innerHTML = "3";
                m += 8;
            } else if (i >= 75 && i <= 99) {
                document.getElementById("change").innerHTML = "4";
                m += 10;
            } else if (i >= 100 && i <= 199) {
                document.getElementById("change").innerHTML = "5";
                m += 15;
            } else if (i >= 200) {
                document.getElementById("state6").innerHTML = "200Km";
                m += 20;
                i += 500;
            }
        }

    } else if (destino == false) {
        document.getElementById("destello").innerHTML = "No existe un destino";
        function wait() {
            document.getElementById("destello").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    } else if (estado == false) {
        document.getElementById("destello").innerHTML = "El coche esta apagado";
        function wait() {
            document.getElementById("destello").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    } else if (frm == true) {
        document.getElementById("destello").innerHTML = "El freno de mano esta activado";
        function wait() {
            document.getElementById("destello").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    } else if (freno == true) {
        freno = false;
        function andar() {
            movimiento = true;
            m += 5;
            i += 1;
            document.getElementById("state6").innerHTML = i + "Km";
            document.getElementById("state5").innerHTML = "Distancia recorrida: " + m + " metros";
            if (frm == true && movimiento == false) {
                clearInterval(y);
                clearInterval(x);
            } if (i >= 25 && i <= 49) {
                document.getElementById("change").innerHTML = "2";
            } else if (i >= 50 && i <= 74) {
                document.getElementById("change").innerHTML = "3";
                m += 8;
            } else if (i >= 75 && i <= 99) {
                document.getElementById("change").innerHTML = "4";
                m += 10;
            } else if (i >= 100 && i <= 199) {
                document.getElementById("change").innerHTML = "5";
                m += 15;
            } else if (i >= 200) {
                document.getElementById("state6").innerHTML = "200Km";
                m += 20;
            } /* else if (mParada >= m && numParadas != 0) {
                numParadas -= 1;
                frenadoAzar();
                if (numParadas == 0) {
                    document.getElementById("status").innerHTML = "No hay mas paradas :D";
                } 
            }*/ else if (m >= recorridoCompletado) {

                document.getElementById("state").innerHTML = "Destino alcanzado, frenando...";
                function wait() {
                    clearInterval(y);
                    clearInterval(x);
                    document.getElementById("state").innerHTML = "Reversando...";
                    function wait2() {
                        document.getElementById("state").innerHTML = "Por favor ponga el freno de mano";
                        document.getElementById("state2").innerHTML = "para apagar el vehiculo";
                        movimiento = false;
                        neutro = true;
                        if (frm == true) {
                            document.getElementById("state").innerHTML = "Puede apagar el vehiculo";
                            document.getElementById("state2").innerHTML = "";
                        }
                    }
                    setTimeout(wait2, 4E3);
                }
                setTimeout(wait, 2E3);
            }
        }
        y = setInterval(andar, 500);
        x = setInterval(andar, 500);
    } else if (estacionado == true) {
        document.getElementById("estacionarias").innerHTML = "Desactiva las estacionarias";
    }
}
function frenar() {
    document.getElementById("state").innerHTML = "Frenando...";
    movimiento = false;
    function wait() {
        document.getElementById("change").innerHTML = "N";
        neutro = true;
        i = 0;
        freno = true;
        document.getElementById("state6").innerHTML = "0Km";
        clearInterval(y);
        clearInterval(x);
        function wait2() {
            document.getElementById("state").innerHTML = "";
        }
        setTimeout(wait2, 2E3);
    }
    setTimeout(wait, 2E3);
}
var estacionado = false;
function frenadoAzar() {
    document.getElementById("estacionarias").innerHTML = "Estacionarias activadas";
    document.getElementById("back").style.zIndex = -1;
    estacionado = true;
    if (estacionado == true) {
        document.getElementById("frenadoAzar").innerHTML = tiempoParada;
        document.getElementById("state").innerHTML = "¡¡¡HORA DE FRENADO!!!";
        //frenar();
        document.getElementById("state").innerHTML = "Frenando...";
        movimiento = false;
        neutro = true;
        function wait() {
            document.getElementById("change").innerHTML = "N";
            neutro = true;
            i = 0;
            freno = true;
            document.getElementById("state6").innerHTML = "0Km";
            clearInterval(y);
            clearInterval(x);
            function wait2() {
                document.getElementById("state").innerHTML = "";
            }
            setTimeout(wait2, 2E3);
        }
        setTimeout(wait, 2E3);
        if (tiempoParada == 0) {
            document.getElementById("back").style.zIndex = 1;
            document.getElementById("frenadoAzar").innerHTML = "";
            document.getElementById("state").innerHTML = "En marcha! De nuevo";
            document.getElementById("estacionarias").innerHTML = "";
            function wait() {
                document.getElementById("state").innerHTML = "";
            }
            setTimeout(wait, 2E3);
        } else {
            tiempoParada -= 1;
            setTimeout(frenadoAzar, 1E3);
        }
    }
}
function estacionar() {
    if (estacionado == false && movimiento == false) {
        document.getElementById("estacionarias").innerHTML = "Estacionarias activadas";
        function wait() {
            document.getElementById("estacionarias").innerHTML = "";
        }
        setTimeout(wait, 2E3);
        estacionado = true;
    } else {
        document.getElementById("estacionarias").innerHTML = "Estacionarias desactivadas";
        function wait() {
            document.getElementById("estacionarias").innerHTML = "";
        }
        setTimeout(wait, 2E3);
        estacionado = false;
    }
}
var giroDerecha = false;
var giroIzquierda = false;
function derecha(){
    if(giroDerecha == false){
        giroDerecha = true;
        document.getElementById("direccional").innerHTML = "Direccional derecha activada";
        function wait(){
            document.getElementById("direccional").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    } else {
        giroDerecha = false;
        document.getElementById("direccional").innerHTML = "Direccional derecha desactivada";
        function wait(){
            document.getElementById("direccional").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    }
}
function izquierda(){
    if(giroIzquierda == false){
        giroIzquierda = true;
        document.getElementById("direccional").innerHTML = "Direccional izquierda activada";
        function wait(){
            document.getElementById("direccional").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    } else {
        giroIzquierda = false;
        document.getElementById("direccional").innerHTML = "Direccional izquierda desactivada";
        function wait(){
            document.getElementById("direccional").innerHTML = "";
        }
        setTimeout(wait, 2E3);
    }
}