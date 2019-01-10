function produceDrivingRange(blockRange) {
  return function(range1, range2) {
    let num1 = range1.split("th")[0]
    let num2 = range2.split("th")[0]
    //if blockRange is less than num1 then it is out of range by num1- blockRange
    //if blockRange is greater than num2 then it is out of range by num2 - blockRange
    //else blockRange is in range you could do a ternary operator

    if (num2 - num1 <= blockRange) {
      console.log("blockRange", blockRange)
      console.log("num1", num1)
      console.log("num2", num2)
      console.log("result", (blockRange - (num2 - num1)))
      return `within range by ${(blockRange -(num2-num1))}`
    } else {
      return `${(num2-num1) - blockRange} blocks out of range`
    }

  }
}

function produceTipCalculator(tip_percentage) {
  return function(total) {

    return total * tip_percentage
  }
}

let driverId = 0
function createDriver() {
  return class driver {
    constructor(name) {
      this.name = name
      this.id = this.driverId ++
    }
  }
}
