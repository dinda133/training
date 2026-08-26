var gameTime = [2, 2, 3, 3, 1, 4, 5]
var totalTime = 0
var exceededLimit = 0

for (i = 0; i < gameTime.length; i++) {
    totalTime += gameTime[i]

    if (gameTime[i] > 2) {
        exceededLimit++
    }
}

console.log('Total time : ' + totalTime + ' hours')
console.log('Exceeded limit : ' + exceededLimit + ' times')