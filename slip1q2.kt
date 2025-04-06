fun main() {
    // Accept employee details from the user
    print("Enter Employee Number: ")
    val eno = readLine()?.toIntOrNull() ?: 0
    
    print("Enter Employee Name: ")
    val ename = readLine() ?: ""
    
    print("Enter Employee Salary: ")
    val salary = readLine()?.toDoubleOrNull() ?: 0.0
    
    // Display employee details
    println("\nEmployee Details:")
    println("Employee Number: $eno")
    println("Employee Name: $ename")
    println("Employee Salary: $salary")
}
