import {Component, OnInit, ViewChild} from '@angular/core';
import {PaneDirective} from '../../directives/pane.directive';

@Component({
  selector: 'app-view-child',
  template: `
    <app-pane id="1" *ngIf="showToggle"></app-pane>
    <app-pane id="2" *ngIf="!showToggle"></app-pane>

    <button (click)="toggle()">Toggle</button>
  `,
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent {

  @ViewChild(PaneDirective)
  set pane(v: PaneDirective) {
    setTimeout(() => {
      this.selectedPane = v.id;
      console.log('Selected pane:', this.selectedPane);
    }, 0);
  }

  selectedPane: string = '';

  showToggle: boolean = true;

  toggle() {
    this.showToggle = !this.showToggle;
  }
}
