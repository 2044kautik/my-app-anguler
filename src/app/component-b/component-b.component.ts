import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.scss'
})
export class ComponentBComponent {
    @Input() data:string = '';
    @Output() childClick: EventEmitter<any> = new EventEmitter();

    onChildClick(){
      console.log('on child click');
      const obj={
        name:'dev'
      }
      this.childClick.emit(obj);
    }

    childFu(){
        console.log('child fu calling from parent');
    }
}
