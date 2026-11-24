function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a / gcd(a, b)) * b;
}

function maxLength(nums: number[]): number {
  const n = nums.length;
  let num = 1;

  for (let i = 0; i < n; i++) {
    let product = 1;
    let curr1 = 0;
    let curr2 = 1;

    for (let j = i; j < n; j++) {
      let val = nums[j];
      product *= val;

      curr1 = gcd(curr1 , val);
      curr2 = lcm(curr2 , val);

      if (product === curr2 * curr1 ) {
        num = Math.max(num, j - i + 1);
      }
    }
  }

  return num;
}
