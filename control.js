var numParadas = 0,
    distancia = 0,
    tiempoParada = 0,
    kmParada = 0,
    x = null,
    y = null,
    i = 0,
    km = 0,
    veloz = 0,
    ne = 0,
    me = 0,
    it = 0,
    distanciaFinal = 0,
    encendido = false,
    frm = false,
    freno = false,
    acelerador = false,
    estacionarias = false,
    direcDerecha = false,
    direcIzquierda = false,
    destine = false,
    movimiento = false,
    freno = false,
    llegada = false;
function encender() {
    if (frm == true && encendido == false && llegada == false) {
        encendido = true;
        document.getElementById("panel-control").innerHTML = "Encendiendo coche...";
        function wait() {
            document.getElementById("panel-control").innerHTML = "Coche encendido";
            function wait2() {
                document.getElementById("panel-control").innerHTML = "¡Bienvenid@!";
            }
            setTimeout(wait2, 1E3);
            document.getElementById("cambios").innerHTML = "Cambios: N";
        }
        setTimeout(wait, 2E3);
    } else if (frm == false && encendido == false) {
        document.getElementById("panel-control").innerHTML = "Freno de mano desactivado";
    } else if (encendido == true && llegada == false) {
        document.getElementById("panel-control").innerHTML = "El coche ya esta encendido";
    } else if (llegada == true && movimiento == false) {
        document.getElementById("panel-control").innerHTML = "Apagando coche";
        function wait() {
            document.getElementById("panel-control").innerHTML = "Coche apagado";
            function wait2() {
                document.getElementById("panel-control").innerHTML = "Hasta luego!";
                encendido = false;
            }
            setTimeout(wait2, 2E3);
            document.getElementById("cambios").innerHTML = "Cambios: ";
        }
        setTimeout(wait, 2E3);
    }
}
function frenoMano() {
    if (frm == false && movimiento == false) {
        frm = true;
        document.getElementById("panel-control").innerHTML = "Freno de mano activado";
    } else if (movimiento == true) {
        document.getElementById("panel-control").innerHTML = "¡Wow! No puedes hacer eso en movimiento";
    } else {
        frm = false;
        document.getElementById("panel-control").innerHTML = "Freno de mano desactivado";
    }
}
function tiempoViaje() {
    
    function timer() {
        document.getElementById("tiempo-coche").innerHTML = "Tiempo: " + ne + " s";
        ne++;
        if (ne >= 60 && ne <= 119) {
            document.getElementById("tiempo-coche").innerHTML = "Tiempo: 1:" + it + " s";
            it++;
        } else if (ne >= 120 && ne <= 179) {
            document.getElementById("tiempo-coche").innerHTML = "Tiempo: 2:" + me + " s";
            me++;
        } else if (ne >= 180) {
            document.getElementById("tiempo-coche").innerHTML = "Llevas mas de 3 minutos conduciendo";
        }
    }
    x = window.setInterval(timer, 500);
}
function acelerar() {
    if (encendido == true && frm == false && destine == true) {
        movimiento = true;
        tiempoViaje();
        function wait(){
            frenadoAzar();
        }
        setTimeout(wait, 35E3);  
        document.getElementById("panel-control").innerHTML = "En movimiento";
        document.getElementById("cambios").innerHTML = "Cambios: 1";
        distanciaFinal = distancia * 1000;
        function acelera() {
            document.getElementById("velocidad-coche").innerHTML = "Velocidad: " + veloz + "Km/h";
            document.getElementById("distancia-recorrida").innerHTML = "Distancia recorrida: " + km + " metros";
            km += 50;
            veloz += 2;
            if (veloz >= 25 && veloz <= 49) {
                document.getElementById("cambios").innerHTML = "Cambios: 2";
            } else if (veloz >= 50 && veloz <= 74) {
                document.getElementById("cambios").innerHTML = "Cambios: 3";
                km += 8;
            } else if (veloz >= 75 && veloz <= 99) {
                document.getElementById("cambios").innerHTML = "Cambios: 4";
                km += 10;
                veloz += 4;
            } else if (veloz >= 100 && veloz <= 199) {
                document.getElementById("cambios").innerHTML = "Cambios: 5";
                km += 15;
                veloz += 5;
            } else if (veloz >= 200) {
                document.getElementById("velocidad-coche").innerHTML = "Velocidad: 200Km/h";
                km += 20;
            } if (km >= distanciaFinal) {
                window.clearInterval(y);
                window.clearInterval(x);
                movimiento = false;
                alert("¡Has llegado a tu destino!");
                document.getElementById("cambios").innerHTML = "Cambios: N";
                document.getElementById("velocidad-coche").innerHTML = "Velocidad: 0Km/h";
                document.getElementById("panel-control").innerHTML = "Reversando...";
                function wait() {
                    document.getElementById("panel-control").innerHTML = "Pon el freno de mano";
                    llegada = true;
                }
                setTimeout(wait, 2E3);
                document.getElementById("distancia-recorrida").innerHTML = "Distancia recorrida: " + distanciaFinal + " metros";
            }
        }
        y = window.setInterval(acelera, 500);
    } else if (frm == true) {
        document.getElementById("panel-control").innerHTML = "Freno de mano activado";
    } else if (encendido == false) {
        document.getElementById("panel-control").innerHTML = "Coche apagado";
    } else if (destine == false) {
        document.getElementById("panel-control").innerHTML = "No se ha escogido un destino";
    }
}
function destino() {
    if (destine == false) {
        destine = true;
        numParadas = Math.floor(Math.random() * (8 - 3) + 3);
        distancia = Math.floor(Math.random() * (11 - 4) + 4);
        tiempoParada = Math.floor(Math.random() * (15 - 5) + 5);
        var parada = 0;
        var n = 0;
        document.getElementById("distancia-total").innerHTML = "Distancia total: " + distancia + "Km";
        kmParada = (Math.floor(Math.random() * ((distancia + 1) - 1) + 1)) * 1000;

        window.setInterval(function () {
            n++;
            console.log(n);
            if (n == tiempoParada) {
                parada++;
                console.log("Parada: " + parada);
                n = 0;
                if (parada == numParadas) {
                    document.getElementById("panel-control").innerHTML = "Todas las paradas han sido realizadas";
                    function wait() {
                        document.getElementById("panel-control").innerHTML = "";
                    }
                    setTimeout(wait, 2E3);
                }
            }
        }, 1000);
    } else if(destine == true){
        document.getElementById("panel-control").innerHTML = "Ya existe un destino";
    } else if (encendido == false){
        document.getElementById("panel-control").innerHTML = "Coche apagado";
    }
}
function frenar() {
    if (encendido == true && movimiento == true) {
        freno = true;
        clearInterval(y);
        clearInterval(x);
        document.getElementById("panel-control").innerHTML = "Disminuyendo velocidad...";
        function wait() {
            document.getElementById("panel-control").innerHTML = "Coche frenado";
            document.getElementById("cambios").innerHTML = "Cambios: N";
            document.getElementById("velocidad-coche").innerHTML = "Velocidad: 0Km/h";
        }
        setTimeout(wait, 2E3);
        movimiento = false;
        veloz = 0;
    } else if (encendido == false) {
        document.getElementById("panel-control").innerHTML = "Coche apagado";
    } else if (movimiento == false) {
        document.getElementById("panel-control").innerHTML = "No estamos en movimiento";
    }
}
function izquierda() {
    if (direcIzquierda == false && movimiento == true) {
        direcIzquierda = true;
        document.getElementById("panel-control").innerHTML = "Girando a la izquierda...";
        function wait() {
            document.getElementById("panel-control").innerHTML = "¡Giro completo!";
            function wait2() {
                direcIzquierda = false;
                document.getElementById("panel-control").innerHTML = "";
            }
            setTimeout(wait2, 1E3);
        }
        setTimeout(wait, 2E3);
    } else if (encendido == false){
        document.getElementById("panel-control").innerHTML = "Coche apagado";
    }else {
        direcIzquierda = false;
    }
}
function derecha() {
    if (direcDerecha == false && movimiento == true) {
        direcDerecha = true;
        document.getElementById("panel-control").innerHTML = "Girando a la derecha...";
        function wait() {
            document.getElementById("panel-control").innerHTML = "¡Giro completo!";
            function wait2() {
                direcDerecha = false;
                document.getElementById("panel-control").innerHTML = "";
            }
            setTimeout(wait2, 1E3);
        }
        setTimeout(wait, 2E3);
    } else if (encendido == false){
        document.getElementById("panel-control").innerHTML = "Coche apagado";
    }else {
        direcDerecha = false;
    }
}
function estacionar() {
    if (estacionarias == false && movimiento == false) {
        estacionarias = true;
        document.getElementById("panel-control").innerHTML = "Luces estacionarias activadas";
        function wait() {
            document.getElementById("panel-control").innerHTML = "";
            function wait2() {
                document.getElementById("panel-control").innerHTML = "Luces estacionarias activadas";
            }
            setTimeout(wait2, 1E3);
        }
        setTimeout(wait, 1E3);
    } else if (encendido == false){
        document.getElementById("panel-control").innerHTML = "Coche apagado";
    } else if (movimiento == true) {
        document.getElementById("panel-control").innerHTML = "No se pueden encender en movimiento";
    }else {
        estacionarias = false;
        document.getElementById("panel-control").innerHTML = "Luces estacionarias desactivadas";
    }
}
function frenadoAzar() {
    document.getElementById("panel-control").innerHTML = "¡¡¡HORA DE FRENADO!!!";
    document.getElementById("tablero").style.zIndex = -1;
    estacionarias = true;
    if (estacionarias == true) {
        //freno();
        document.getElementById("panel-control").innerHTML = tiempoParada;
        movimiento = false;
        function wait() {
            document.getElementById("cambios").innerHTML = "N";
            freno = true;
            document.getElementById("velocidad-coche").innerHTML = "0Km/h";
            clearInterval(y);
            clearInterval(x);
            function wait2() {
                document.getElementById("panel-control").innerHTML = "";
            }
            setTimeout(wait2, 2E3);
        }
        setTimeout(wait, 2E3);
        if (tiempoParada == 0) {
            document.getElementById("tablero").style.zIndex = 1;
            document.getElementById("panel-control").innerHTML = "¡En marcha! De nuevo";
            clearInterval(y);
            clearInterval(x);
            function wait() {
                document.getElementById("panel-control").innerHTML = "";
            }
            setTimeout(wait, 2E3);
        } else {
            tiempoParada -= 1;
            setTimeout(frenadoAzar, 1E3);
        }
    }
}