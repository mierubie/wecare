<?php
// Enable error reporting to debug any issues
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_db";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection is successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve the POST data from the form (from JavaScript)
$user = isset($_POST["username"]) ? $_POST["username"] : '';
$gradeSection = isset($_POST["grade-section"]) ? $_POST["grade-section"] : '';
$email = isset($_POST["email"]) ? $_POST["email"] : '';
$problem = isset($_POST["problem"]) ? $_POST["problem"] : '';
$status = isset($_POST["status"]) ? $_POST["status"] : '';

// Validate data (ensure no field is empty)
if (empty($user) || empty($gradeSection) || empty($email) || empty($problem) || empty($status)) {
    // If any field is empty, return an error message in JSON format
    echo json_encode(["success" => false, "message" => "All fields are required."]);
    exit();
}

// Insert the validated data into the database
$sql = "INSERT INTO users (username, grade_section, email, problem, status) 
        VALUES ('$user', '$gradeSection', '$email', '$problem', '$status')";

// Execute the SQL query and check for success
if ($conn->query($sql) === TRUE) {
    // Return a success response in JSON format
    echo json_encode(["success" => true, "message" => "Sign-in successful."]);
} else {
    // If there is an error with the query, return the error message
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

// Close the database connection
$conn->close();
?>
