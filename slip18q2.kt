import java.util.Scanner

// Function to display college details
fun displayCollegeDetails(id: Int, name: String, year: Int) {
    println("----- College Details -----")
    println("College ID     : $id")
    println("College Name   : $name")
    println("Established In : $year")
}

fun main() {
    val scanner = Scanner(System.`in`)

    // Taking input
    print("Enter College ID: ")
    val id = scanner.nextInt()
    scanner.nextLine() // consume newline

    print("Enter College Name: ")
    val name = scanner.nextLine()

    print("Enter Establishment Year: ")
    val year = scanner.nextInt()

    // Calling function
    displayCollegeDetails(id, name, year)
}
