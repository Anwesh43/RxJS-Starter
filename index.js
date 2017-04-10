const Rx = require('rxjs')
const Observable = Rx.Observable
const greets = ["Hello","Hi","Good Morning!","Good Evening!"]
Observable.fromEvent(document.getElementById('b1'),'click').subscribe(()=>{
    console.log("clicked")
})
const numbers = [1,2,3,4,5,6,7,8,9,10]
Observable.interval(1000).map((num)=>numbers[num%10]*10).subscribe((num)=>{
    console.log(`the output is ${num}`)
})
const helloObservable = Observable.create((observer)=>{
    setInterval(()=>{
        observer.next("hello")
    },2000)
})
helloObservable.subscribe((data)=>{
    console.log(data)
})
Observable.interval(3000).map((count)=>{return greets[count%greets.length]}).subscribe((greetMsg)=>{
    console.log(greetMsg)
})
Observable.fromEvent(document.getElementById('inp'),'input').filter((event)=>{
    return event.target.value.length>=5
}).map((event)=>{
    return event.target.value
}).subscribe((data)=>{
    console.log(data)
})
