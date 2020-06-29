function join(arr, concatStr) {
    join_result = ''
    for (i=0; i<arr.length-1; i++) {
        join_result += arr[i] + concatStr
    }
    join_result1 = join_result + arr[arr.length-1]
    return join_result1 
}

function repeat(str, times) {
    answer = ''
    for (i=1; i<=times; i++){
        answer += str
    }
    return answer
  
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
