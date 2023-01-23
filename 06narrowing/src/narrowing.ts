//always be extra cautious at these places bruh

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

//caution
//typeof array is object - always rememeber that brother
function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

//use typeof in above cases simple as that
//Dont' fall in the traps bruh
//I did this in java as well, if you remember
