import {Directive, Input} from '@angular/core';

@Directive({
  selector: 'app-pane'
})
export class PaneDirective {
  @Input() id!: string;
}
