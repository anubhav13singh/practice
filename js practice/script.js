function convert(){
    let kms = document.getElementById("data").value;
    // alert(`${kms}`)
    const factor = 0.621371;
    let miles = kms * factor;
    // alert(miles);
    // return miles;
    document.getElementById('result').innerHTML = `${miles} miles` ;
}

function change(){
    let celcius = document.getElementById("value").value;
    let ferh = celcius * 1.8 + 32;
    document.getElementById('ferh').innerHTML = `${ferh} ferh` ;
}