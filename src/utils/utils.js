// la password deve contenere almeno 8 caratteri e almeno un carattere speciale 
function checkPassword(params){
    let regex = /^(?=.*[!@#$&*]).{8,}$/i

    return regex.test(params)
}
export {checkPassword}