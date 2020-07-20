// Problem 1
function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(10560);
console.log(result , "Mile");

// Problem 2
function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWoodNeeded = chairCount + tableCount + bedCount;
    return totalWoodNeeded;
}
var woodResult = woodCalculator(2, 5, 3);
console.log(woodResult, "cubic feet");

// Problem 3
function brickCalculator(floor){
    if(floor <= 10){
        var feetCount = floor * 15;
        var result1 = feetCount * 1000;
        return result1;
    }
    else if ( floor > 10 && floor < 21){
        floor = floor - 10;
        var feetCount2 = floor * 12;
        var result2 = feetCount2 * 1000;
        floor = 10;
        var Level1st = floor * 15;
        var brick = Level1st * 1000;
        var finalResult = result2 + brick;
        return finalResult; 
    }
    else if (floor > 20){
        floor = floor - 20;
        var feetCount3 = floor * 10;
        var result3 = feetCount3 * 1000;
        floor = 10;
        var floor1st = floor * 15;
        var result4 = floor1st * 1000;
        floor = 20;
        var level2nd = floor * 12;
        var result5 = level2nd * 1000;
        var finalResult = result3 + result4 + result5;
        return finalResult;
    }
}
var totalBrick = brickCalculator(25);
console.log(totalBrick);

// Problem 4
function tinyFriend(names){
    var smallest = names[0];
    for (var i = 0; i < names.length; i++){
        var currentName = names[i];
        if(currentName.length < smallest.length){
            smallest = currentName;
        }
    }
    return smallest;
}
var smallestName = tinyFriend(["Kazi", "Rajuli", "Arman", "Mathew", "Dip", "Sakibul"]);
console.log(smallestName);