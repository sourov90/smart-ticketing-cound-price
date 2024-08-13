let  prices = document.getElementById('totalPrice')
let totalCound = 0;
function myDate(e) {
  document.getElementById(e).addEventListener('click', function () {
    document.getElementById(e).classList.add('bg-red-200')
     
    const addtext = document.getElementById(e).innerText;
    const title = 'Economoy'
    let price = 550;
    const containers = document.getElementById('container')
    const div = document.createElement('div')
    div.classList.add('div')
    const p1 = document.createElement('p');
    p1.innerText = addtext
    const p2 = document.createElement('p');
    p2.innerText= title;
    const p3 = document.createElement('p')
    p3.innerText=price;
    div.appendChild(p1);
    div.appendChild(p2)
    div.appendChild(p3)
    containers.appendChild(div);
    prices.innerText = totalCound += price;
  })
}

//style a cometion 
document.getElementById("input_filed").addEventListener('keyup',function(e){
  document.getElementById('input_btn').addEventListener('click', function () {
    if(e.target.value == 'sourov'){
      const orginalPrice = parseInt(prices.innerText);
      const discound = (orginalPrice * 10)/100;
      const grandPrice = orginalPrice-discound;
      document.getElementById("grand-price").innerText = grandPrice
       
    }
  })
})


myDate("A")
myDate("B")
myDate("C")
myDate("D")
myDate("E")
myDate("F")
myDate("G")
myDate("H")
myDate("I")
myDate("J")
myDate("K")
myDate("L")
myDate("M")
myDate("N")
myDate("O")
myDate("P")
