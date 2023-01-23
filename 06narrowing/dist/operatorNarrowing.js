"use strict";
//let's figure this out for now bruh!! Shouldn't be too hard for sure
//suppose above stuff is true for some reasons right?
//How cool feature is that, Typescript offers us
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        //if this property exists in this account
        return account.isAdmin;
    }
    return false;
}
