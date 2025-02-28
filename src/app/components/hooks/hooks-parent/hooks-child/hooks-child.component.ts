import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hooks-child',
  templateUrl: './hooks-child.component.html',
  styleUrls: ['./hooks-child.component.css']
})
export class HooksChildComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,OnDestroy{
  @Input() msg!: string;
  @ViewChild('temp') child!: ElementRef;
  @ContentChild('content') content !: ElementRef;

  constructor() {
    console.log('Constructor--', this.msg);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called.');
    console.log('changes', changes);
  }

  ngOnInit() {
    console.log('ngOnInit--', this.msg);
    // console.log('child--',this.child);  //Not get @ViewChild Value
    
  }

  ngDoCheck() {
    console.log('ngDoCheck', this.msg);
    // console.log('ngDoCheck--child--',this.child.nativeElement);  //Not get @ViewChild Value 
  }

    ngAfterContentInit() {
      // console.log('ngAfterContentInit',this.child);  //Not get @ViewChild Value-- get undefined 
    console.log('ngAfterContentInit--',this.content.nativeElement.innerHTML);
    }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked--',this.content.nativeElement.innerHTML);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit',this.child.nativeElement.innerHTML); 
  }

   ngAfterViewChecked(){
    console.log('ngAfterViewChecked',this.child.nativeElement.innerHTML); 
   }

   ngOnDestroy() {
     console.log('ngOnDestroy hook called..........');
   }
   
}
