function reverse(str) {
    new_string = ''
    for (i=1; i<=str.length; i++) {
        new_string += str[str.length-i]
    }
    console.log(new_string)
  
}

reverse('hello');
