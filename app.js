const getSeconds = hours => {
    const minutes = 60
    const seconds = 60
    return hours * minutes * seconds
}

console.log(getSeconds(5))

const buttonClicked = () => {
    document.getElementById("code-output").innerHTML += "<p>Seconds: "+ getSeconds(5) + "</p>"
}