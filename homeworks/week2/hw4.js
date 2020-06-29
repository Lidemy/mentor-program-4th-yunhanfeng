function printFactor(n) {
    answer = ''
    for (i=1; i<=n; i++) {
        if (n % i === 0) {
            answer += i + '\n'
        }
    }
    console.log(answer)
}


printFactor(10);
