//I have no clue why this works --- what was the need of this interface for fuck
//Have to figure this out
interface IRuleKey {
  [index: string]: number;
}
//this is basic interface simple -- no worries

const temp: IRuleKey = {
  type: 0,
  color: 1,
  name: 2,
};

function countMatches1(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let ans = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][temp[ruleKey]] === ruleValue) ans++;
  }

  return ans;
}

const SEARCH_CRITERIA = {
  type: 0,
  color: 1,
  name: 2,
};

function countMatches2(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  const criteriaIndex = SEARCH_CRITERIA[ruleKey];
  const foundItems = items.filter((item) => item[criteriaIndex] === ruleValue);
  return foundItems?.length;
}

//one way for sure of doing this stuff
function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  //so if type is there then check with first and so on
  let ans = 0;
  let index = 0;
  if (ruleKey === "type") {
    index = 0;
  } else if (ruleKey === "color") {
    index = 1;
  } else {
    index = 2;
  }

  for (let i = 0; i < items.length; i++) {
    if (items[i][index] === ruleValue) ans++;
  }

  return ans;
}
