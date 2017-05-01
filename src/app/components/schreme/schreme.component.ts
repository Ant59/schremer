import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-schreme',
  templateUrl: './schreme.component.html',
  styleUrls: ['./schreme.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchremeComponent {
  @Output() schreme: EventEmitter<string> = new EventEmitter<string>();

  schremeForm = this.fb.group({
    scheme: ['', Validators.required],
  })

  constructor(private fb: FormBuilder) { }

}
