let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

What is the result? Why?

// my answer : alert(this)

// Right Solution The array has 3 values: initially it had two, plus the function.