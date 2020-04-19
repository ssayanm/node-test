const url = require("url");

const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Host Name()
console.log(myUrl.hostname);

//PathName
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Search Params Object
console.log(myUrl.searchParams);

//Add Param
myUrl.searchParams.append("abc", "567");
console.log(myUrl.searchParams);

//Loop through params
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name} : ${value}`);
});
