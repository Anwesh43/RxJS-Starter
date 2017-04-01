var Rx = require('rxjs')
var Observable = Rx.Observable
Observable.fromEvent(document.getElementById('b1'),'click').subscribe(()=>{
    console.log("clicked")
})
Observable.interval(1000).subscribe(()=>{
    console.log("counting")
})
