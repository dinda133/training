var x = 5;
var y = 5;

if (x > 0 && y > 0) {
    console.log("Top right");
} else if (x < 0 && y < 0) {
    console.log("Bottom left");
} else if (x > 0 && y < 0) {
    console.log("Bottom right");
} else if (x < 0 && y > 0) {
    console.log("Top left");
} else {
    console.log("Middle");
}