fun main() {
    print("Enter a number: ")
    val number = readLine()!!.toInt()
    
    val result = factorial(number)
    println("Factorial of $number is: $result")
}

// Function to calculate factorial
fun factorial(n: Int): Long {
    var fact: Long = 1
    for (i in 1..n) {
        fact *= i
    }
    return fact
}
