import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { SidenavComponent } from './components/navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './components/navigation/toolbar/toolbar.component';
import { GuideFormComponent } from './components/guide-form/guide-form.component';
import { GuideListComponent } from './components/guide-list/guide-list.component';
import { GuidePreviewComponent } from './components/guide-preview/guide-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    GuideFormComponent,
    GuideListComponent,
    GuidePreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // for change the format of the Datepicker to DD/MM/YYYY
  providers: [ { provide: LOCALE_ID, useValue: 'es-BO' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
