import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],      
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'table'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('table');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('table app is running!');
  });
});





import { Component } from '@angular/core';  
  
@Component({  
    moduleId: module.id,  
    selector: 'lifecycle-sample',  
    templateUrl: 'app.component.lifecycle.html'  
})  
  
export class LifeCycleComponent {      
    data:number=100;  
  
    constructor() {  
        console.log(`new - data is ${this.data}`);  
    }  
      
    ngOnChanges() {  
        console.log(`ngOnChanges - data is ${this.data}`);  
    }  
  
    ngOnInit() {  
        console.log(`ngOnInit  - data is ${this.data}`);  
    }  
  
    ngDoCheck() {  
        console.log("ngDoCheck")  
    }  
  
    ngAfterContentInit() {  
        console.log("ngAfterContentInit");  
    }  
  
    ngAfterContentChecked() {  
        console.log("ngAfterContentChecked");  
    }  
  
    ngAfterViewInit() {  
        console.log("ngAfterViewInit");  
    }  
  
    ngAfterViewChecked() {  
        console.log("ngAfterViewChecked");  
    }  
  
    ngOnDestroy() {  
        console.log("ngOnDestroy");  
    }  
  
    fnAddNumber():void{  
        this.data+=100;  
    }  
  
    deleteNumber():void{  
        this.data -=10;  
    }  
}  