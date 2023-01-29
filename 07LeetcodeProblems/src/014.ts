function decodeMessage(key: string, message: string): string {
  let items = new Map();

  //map. set() .get() .has() .size .delete() .clear
  // Iteration ke liye niche waala
  // for (let [number, activity] of activities) {
  //     console.log(`Activity ${number} is ${activity}`);
  //   }

  for (let i = 0; i < key.length; i++) {
    if (key[i] === " ") continue;
    if (items.has(key[i])) continue;
    items.set(key[i], items.size);
  }

  let ans = "";

  //complexity in javaScript should be known as well - time to time
  //Python can be learned as well if you think about it
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      ans = ans + " ";
    } else {
      ans =
        ans + String.fromCharCode(items.get(message[i]) + "a".charCodeAt(0));
    }
  }

  return ans;
}

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
