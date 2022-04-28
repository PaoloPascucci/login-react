function checkPassword(params){
    let regex = new RegExp("^(?=.*[@$!%*?&]){8,}$")
    return regex.test(params)
}
export {checkPassword}