import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [MatTabsModule],
  template: `
    <mat-tab-group>
      <mat-tab label="Main">
        <p>Main tab (entries + add food)</p>
      </mat-tab>

      <mat-tab label="Graphs">
        <p>Graphs tab (daily / weekly)</p>
      </mat-tab>
    </mat-tab-group>
  `
})
export class AppShellComponent {}
