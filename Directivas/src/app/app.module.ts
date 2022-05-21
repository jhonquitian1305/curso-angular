import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { SubrayadoDirective } from './directivas/subrayado.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    BuclesComponent,
    SwitchComponent,
    SubrayadoDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
