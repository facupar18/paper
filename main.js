const ROBOT = () => {
    var number = Math.random();
    if (number <= 0.450){
        let cpu = 'piedra';
        return cpu
    }
    else if (number >= 0.750){
        let cpu = 'tijera';
        return cpu
    }else{
        let cpu = 'papel';
        return cpu
    }
}
const GAME = (value, valuecpu) => {
    if(value != valuecpu){
        if (value === "piedra" && valuecpu ==="tijera"){
            alert("Ah ganado");
        }else if (value === "papel" && valuecpu ==="piedra"){
            alert("Ah ganado");
        }else if (value === "tijera" && valuecpu ==="papel"){
            alert("Ah ganado");
        }else if (valuecpu === "tijera" && value ==="papel"){
            alert("Ah perdido");
        }else if (valuecpu === "tijera" && value ==="papel"){
            alert("Ah perdido");
        }else if (valuecpu === "papel" && value ==="piedra"){
            alert("Ah perdido");
        }else if (valuecpu === "piedra" && value ==="tijera"){
            alert("Ah perdido");
    }else{
        alert("Empate")
    }
}
}