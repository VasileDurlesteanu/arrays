// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

let arr = ["Jazz", "Blues"];

arr.push("Rock-n-Roll");

arr[1] = "Classics";

arr.shift();

arr.unshift("Rap" ,"Reggae");