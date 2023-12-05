import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyPipe } from './heavyPipe.pipe';

@Component({
  standalone: true,
  imports: [NgFor, HeavyPipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let i = index">
      {{ person | heavyPipe: i }}
    </div>
  `,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
