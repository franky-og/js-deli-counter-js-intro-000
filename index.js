
function takeANumber (katzDeliLine, customerName) {
  katzDeliLine.push(customerName)
  return `Welcome, ${customerName}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  
  }
}
function currentLine (katzDeliLine) {
    if(katzDeliLine.length === 0) {
      return "The line is currently empty."
    } else {
      var line = "The line is currently: "
      
      for (var i = 0; i < katzDeliLine.length; i++) {
        line = line + `${i + 1}. ${katzDeliLine[i]}, `
     }
     
     return line.slice(0,-2)
}
}