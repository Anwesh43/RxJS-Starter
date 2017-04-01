var Rx = require('rxjs')
var Observable = Rx.Observable
Observable.fromEvent(document.getElementById('b1'),'click').subscribe(()=>{
    console.log("clicked")
})
const numbers = [1,2,3,4,5,6,7,8,9,10]
Observable.interval(1000).map((num)=>numbers[num%10]*10).subscribe((num)=>{
    console.log(`the output is ${num}`)
})
