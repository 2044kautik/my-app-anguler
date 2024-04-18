import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit{
      public title: string = 'My application';
      public search: string = 'kautik';
      
       constructor(){
        console.log(this.title);
       }

       test(){
        console.log('test',this.search);
       }

       ngOnInit(): void {
         console.log('onInit eventes called');
       }
       ngDoCheck(): void {
        console.log('docheck eventes called');
      }
      ngAfterViewInit(): void {
        console.log('afterviewInit eventes called');
      }
      ngAfterContentChecked(): void {
        console.log('afterContentcheck eventes called');
      }
      ngAfterContentInit(): void {
        console.log('aftercontentcheck eventes called');
      }
}
