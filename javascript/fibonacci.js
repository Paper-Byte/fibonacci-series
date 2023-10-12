function fibonacci(num) {
  const array = [0, 1, 1];
  if (num === 0) {
    return 0;
  }
  if (num <= 2) {
    return 1;
  }
  for (let i = 3; i <= num; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array.pop();
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: 0');
  console.log('=>', fibonacci(0));

  console.log('');

  console.log('Expecting: 1');
  console.log('=>', fibonacci(2));

  console.log('');

  console.log('Expecting: 55');
  console.log('=>', fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
