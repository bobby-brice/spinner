let chars = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

let spinner = function(arr) {
  let count = 100;
  for (let i = 0; i <= arr.length; i++) {
    setTimeout(() => {
      process.stdout.write("\r" + arr[i++]);
    }, count);
    count += 200;
  }
};
spinner(chars);