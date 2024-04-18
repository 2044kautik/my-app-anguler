import { Component, ViewChild, viewChild } from '@angular/core';
import { ComponentBComponent } from '../component-b/component-b.component';
@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [ComponentBComponent],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.scss'
})
export class ComponentAComponent {
    public parentData:string='I am coming from parent data';
    @ViewChild('child') child:any;

    parentFu(value:string){
      console.log('coming from child..');
    }
    callChild(){
      this.child.childFu();
    }
}
