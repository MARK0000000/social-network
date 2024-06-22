export function validatePassword(password) {
    let errors = []

    if (password.length < 8) {
        errors.push('valPassLength')
    }
    if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
        errors.push('valPassLetters')
    }
    if ((password.match(/[!@#$%^&*]/g) || []).length < 2) {
        errors.push('valPassSymbols')
    } 

    return errors.length === 0 ? true : errors
}

export function validateRepeatPassword (password, repeatPassword, typeOfLog) {
    if (typeOfLog === 'up' && password !== repeatPassword) {
        return "valRepPass";
    } else {
        return true;
    }
  
}