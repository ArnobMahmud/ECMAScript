var myMap = new Map();

myMap.set("key1", "Bangladesh");
myMap.set("key2", "UK");
myMap.set("key3", "Russia");
myMap.set("key4", "UAE");
myMap.set("key5", "Turkey");
myMap.set("key6", "USA");
myMap.set("key7", "Albenia");

if (myMap.has("key5")) {
    console.log(myMap.get("key5"));
} else {
    console.log("Not found");
}
