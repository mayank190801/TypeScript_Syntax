"use strict";
//this is basic interface simple -- no worries
const temp = {
    type: 0,
    color: 1,
    name: 2,
};
function countMatches1(items, ruleKey, ruleValue) {
    let ans = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i][temp[ruleKey]] === ruleValue)
            ans++;
    }
    return ans;
}
const SEARCH_CRITERIA = {
    type: 0,
    color: 1,
    name: 2,
};
function countMatches2(items, ruleKey, ruleValue) {
    const criteriaIndex = SEARCH_CRITERIA[ruleKey];
    const foundItems = items.filter((item) => item[criteriaIndex] === ruleValue);
    return foundItems === null || foundItems === void 0 ? void 0 : foundItems.length;
}
//one way for sure of doing this stuff
function countMatches(items, ruleKey, ruleValue) {
    //so if type is there then check with first and so on
    let ans = 0;
    let index = 0;
    if (ruleKey === "type") {
        index = 0;
    }
    else if (ruleKey === "color") {
        index = 1;
    }
    else {
        index = 2;
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i][index] === ruleValue)
            ans++;
    }
    return ans;
}
