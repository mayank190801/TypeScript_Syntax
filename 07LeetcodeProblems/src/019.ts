function truncateSentence(s: string, k: number): string {
  const arr = s.split(" ");
  arr.splice(k);
  return arr.join(" ");
}

console.log(truncateSentence("Hello how are you Contestant", 4));
