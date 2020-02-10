import { NgModule } from '@angular/core';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatGridListModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatGridListModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatGridListModule, MatDialogModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule
  ]
})
export class MaterialModule {}