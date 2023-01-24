function convertTemperature(celsius: number): number[] {
  let ans: number[] = [];
  let kelvin = celsius + 273.15;
  let Fahrenheit = celsius * 1.8 + 32.0;
  ans.push(kelvin);
  ans.push(Fahrenheit);
  return ans;
}

console.log(convertTemperature(36.5));
