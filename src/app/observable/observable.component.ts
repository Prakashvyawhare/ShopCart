import { Component, OnInit } from '@angular/core';
import { count } from 'console';
import { filter, from, fromEvent, interval, map, observable, Observable, of, timer } from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  count: any="";
result: any;

  constructor() { }

  MyObservable = new Observable((subscriber) => {
    console.log('Observable start');
    subscriber.next('1');
    subscriber.next('2');
    subscriber.next('3');
    setTimeout(() => {
      subscriber.next('4');

      subscriber.complete();


    }, 3000);



  })


  ngOnInit(): void {

    /////////// observable exmple ////////
    this.MyObservable.subscribe((val) => {
      console.log(val);

    })

    ///   of operator of rxjs  /////
    of(1, 2, 3).subscribe((val) => {
      console.log("from of operator" + val);


    })

    ///////  of operator with map = is used to convert data   /////
    of(10, 20, 30).pipe(map((x: any) => x * x)).subscribe(x => {
      console.log("Of operator : " + x)
    })

    ////   from is used when observable is in Array 
    from(this.product).pipe(map((x: any) => x * 5)).subscribe(x => {

      console.log("From operator : " + x);
      return x;
    })
    /////  used filter  x%2 ==0  ///
    from(this.product).pipe(filter((x: any) => x % 2 == 0)).subscribe(x => {
      console.log("filter : " + x);
    })
    /////  using timer operator /////
    const timer = interval(1000);
    const subscription = timer.subscribe(x => { console.log(x) });
    // const counter2 =interval(5000);
    setInterval(() => {
      subscription.unsubscribe();
    }, 8000);



///  from event ///

var count = 0;
    const clicks = fromEvent(document, 'click');
    clicks.subscribe(x=>console.log(count++)
    )

    
  }
  button(){
    let b= this.count
  };  

}