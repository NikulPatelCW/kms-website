// src/app/shared/shared-imports.ts
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Angular Material modules
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export const SharedImports = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,

  // Material UI
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
];
