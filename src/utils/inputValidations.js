export const isNotSpecialCharacter = (password) => {
    if (password.indexOf('!')
        == -1 && password.indexOf('@')
        == -1 && password.indexOf('#')
        == -1 && password.indexOf('$')
        == -1 && password.indexOf('%')
        == -1 && password.indexOf('&')
        == -1 && password.indexOf('*')
        == -1) {
        return true
    } else {
        return false
    }
}
export const inputValidation = (type, value, setError, setWarning, next = null, compareValue) => {

    if (type === 'login') {
        if (value == null || value.length == 0) {
            setError(true)
        } else {
            setError(false)
        }
        next.current.focus()
    }
    if (type === 'name') {
        //NAME VALIDATION
        if (value.length > 60) {
            setError(true)
            setWarning(false)
        } else {
            setError(false)
        }
        if (next) {
            next.current.focus()
        }
        console.log('Type: ' + type)

    }
    if (type === 'email') {
        //EMAIL VALIDATION
        if (value.indexOf('@') == -1 || value.length == 1) {
            setError(true)
            setWarning(false)
        } else {
            setError(false)
        }

        if (next) {
            next.current.focus()
        }
        console.log('Type: ' + type)
    }
    if (type === 'username') {
        //USERNAME VALIDATION
        if (value.length < 5 || value.length > 30) {
            setError(true)
            setWarning(false)
        } else {
            setError(false)
        }
        if (next) {
            next.current.focus()
        }
        console.log('Type: ' + type)
    }
    if (type === 'password') {
        //PASSWORD VALIDATION
        const regex = /[0-9]/

        if (value.length < 8 || value.length > 60) {
            setError(true)
            setWarning(false)
        } else if (value.toLowerCase() == value) {
            setError(true)
            setWarning(false)
        } else if (value.toUpperCase() == value) {
            setError(true)
            setWarning(false)
        } else if (regex.test(value) == false) {
            setError(true)
            setWarning(false)
        } else if (isNotSpecialCharacter(value)) {
            setError(true)
            setWarning(false)
        } else {
            setError(false)
        }
        if (next) {
            next.current.focus()
        }
        console.log('Type: ' + type)
    }
    if (type === 'confirmPassword') {
        if (value != compareValue) {
            setError(true)
            setWarning(false)
        } else {
            setError(false)
        }

        if (next) {
            next.current.focus()
        }
        console.log('Type: ' + type)
    }
    if (type === 'whatsapp') {
        if (value.length <= 12) {
            setError(true)
            setWarning(false)
        } else {
            setError(false)
        }

        if (next) {
            next.current.focus()
        }
        console.log('Type: ' + type)
    }

}

export const onChangeValidation = (type, value, setValue, setError, setWarning, compareValue) => {
    setValue(value)
    setError(false)
    if (type === 'name') {
        //NAME VALIDATION
        if (value.length > 60) {

            setWarning(true)
        } else {
            setWarning(false)
        }

    }
    if (type === 'email') {
        //EMAIL VALIDATION
        if (value.indexOf('@') == -1) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }
    if (type === 'username') {
        //USERNAME VALIDATION
        if (value.length < 5 || value.length > 30) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }
    if (type === 'password') {
        //PASSWORD VALIDATION
        const regex = /[0-9]/

        if (value.length < 8 || value.length > 60) {
            setWarning(true)
        } else if (value.toLowerCase() == value) {
            setWarning(true)
        } else if (value.toUpperCase() == value) {
            setWarning(true)
        } else if (regex.test(value) == false) {
            setWarning(true)
        } else if (isNotSpecialCharacter(value)) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }
    if (type === 'confirmPassword') {
        if (value != compareValue) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }
    if (type === 'whatsapp') {
        if (value.length <= 12) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }

    if (value.length == 0) {
        setWarning(false)
        setError(false)
    }

}