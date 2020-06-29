function capitalize(str) {
    if (str[0]>= 'a' && str[0] <= 'z') {
        var aCode = str[0].charCodeAt(0)
        var uppercase = String.fromCharCode(aCode-32)
        return uppercase + str.substring(1)
    } else {
        return str
    }
  
}

console.log(capitalize('hello'));
