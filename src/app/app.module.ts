import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopComponent } from './top/top.component';
import { FootComponent } from './foot/foot.component';
import { CaloriesComponent } from './calories/calories.component';
import { ProteinComponent } from './protein/protein.component';
import { CarboComponent } from './carbo/carbo.component';
import { TotalComponent } from './total/total.component';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material-module';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    FootComponent,
    CaloriesComponent,
    ProteinComponent,
    CarboComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
