
let billTotalInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')
let numberOfPeople = Number(numberOfPeopleDiv.innerText) // buna bak ekstradan

const calculateBill = () => { 

  const bill = Number(billTotalInput.value)
  
  const tippercent = Number(tipInput.value) / 100 
  
  const totaltip = bill * tippercent
  
  const total = totaltip + bill

  console.log(total);

  const perPersonTotal = total / numberOfPeople
  

  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}` //.toFixed(2) bak //.toLocaleString('en-US') bak //birini seç sadece yoksa çalışmaz // buna bak ekstradan
}

// split the bill between more people 
const increasePeople = () => {

  numberOfPeople++

  numberOfPeopleDiv.innerText = numberOfPeople 

  // calculate the bill onto the new num of people
  calculateBill()
}

// divide the bill between fewer people 
const decreasePeople = () => {

  if (numberOfPeople <= 1) {
    alert('cannot go lower than 1')
    return //numberOfPeople
  }
  
  numberOfPeople--

  numberOfPeopleDiv.innerText = numberOfPeople
  
  calculateBill()
}