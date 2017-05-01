import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-schreme',
  templateUrl: './schreme.component.html',
  styleUrls: ['./schreme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchremeComponent {
  @Input() schremeForm: FormGroup;
  @Output() schreme: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

}
