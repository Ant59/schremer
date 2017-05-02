import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  open: boolean = false;

  @Input() isLoggedIn: boolean;
  @Input() userEmail: string;

  constructor() { }

}
