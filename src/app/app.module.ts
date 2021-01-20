import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CaruselComponent } from './carusel/carusel.component';
import { BoxComponent } from './box/box.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { InfoRowComponent } from './info-row/info-row.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaruselComponent,
    BoxComponent,
    InfoTableComponent,
    InfoRowComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
