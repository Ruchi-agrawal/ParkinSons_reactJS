
export function validateEmail(email){
    // const regexpForEmail = new RegExp(
    //     '^[a-zA-Z0-9]+[.-]?[a-zA-Z0-9]+[@]{1}[a-zA-Z0-9]{2,10}(.)[a-zA-Z]{2,8}(.)[a-zA-Z]{0,4}(.)[a-zA-Z]{0,4}$',
    //     )
    // var isValid = regexpForEmail(email)
    // if (isValid) {
    //     return true;
    // }else{
    //     return false;
    // }   
}

export function validDomain(email){
    if(email.indexOf("@abbvie.com", email.length - "@abbvie.com".length) !== -1){
        return true        
    }else if(email.indexOf("@allergan.com", email.length - "@allergan.com".length) !== -1){
        return true
    }
    return false
}