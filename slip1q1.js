function reverse_no(num) {
    let rev = 0;

    for (let i = 0; i<=num; i++) {
        let rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }

    return rev;
}

let num = 256;
console.log("Reversed no is: " + reverse_no(num));

