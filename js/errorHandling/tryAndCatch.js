// ✅ try...catch Block
// Used to catch and handle errors during runtime.

 
try {
  // Code that might throw an error
  let a = 10;
  let b = a + x; // x is not defined
  console.log(b);
} catch (error) {
  // Handle the error
  console.log("Error caught:", error.message);
}
 
 
//  Error caught: x is not defined
// ✅ try runs the risky code
// ✅ catch runs if an error occurs

// ✅ finally Block
// Used to run code no matter what, whether there was an error or not.

 

try {
  console.log("🚀 Starting process...");
  let result = 10 / 2;
  console.log("Result:", result);
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("🧹 Cleanup done.");
}
 

// 🚀 Starting process...
// Result: 5
// 🧹 Cleanup done.
// 📝 finally is great for closing files, releasing resources, etc.

// ✅ throw and Custom Errors
// You can create your own errors using throw and new Error().

 

function registerUser(username) {
  if (!username) {
    throw new Error("Username is required!");
  }
  console.log("User registered:", username);
}


try {
  registerUser(""); // passing empty username
} catch (error) {
  console.log("❗ Custom Error:", error.message);
}
 

// ❗ Custom Error: Username is required!
// 🧠 Why Use Error Handling?
// Prevents app crashes

// Helps debug issues 
// Allows graceful fallback (like showing a friendly error message)


 
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (err) {
  console.log("❌ Error:", err.message);
} finally {
  console.log("✅ Operation complete.");
}
