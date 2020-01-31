import { NgModule } from '@angular/core';

import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatGridListModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatGridListModule, MatDialogModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTooltipModule, MatGridListModule, MatDialogModule
  ]
})
export class MaterialModule {}