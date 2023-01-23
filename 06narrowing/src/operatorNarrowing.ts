//let's figure this out for now bruh!! Shouldn't be too hard for sure

interface User10 {
  name: string;
  email: string;
}

interface Human {
  name: string;
  email: string;
  isAdmin: boolean;
}

//suppose above stuff is true for some reasons right?
//How cool feature is that, Typescript offers us
function isAdminAccount(account: User10 | Human) {
  if ("isAdmin" in account) {
    //if this property exists in this account
    return account.isAdmin;
  }
  return false;
}
