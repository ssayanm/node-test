const Person = require("./Person.js");
const person1 = new Person("Sayan", 32);
const Logger = require("./logger.js");

person1.greeting();

const logger = new Logger();

logger.on("message", (data) => console.log("Called Listener:", data));

logger.log("Hello World");
logger.log("Hey Sayan");
