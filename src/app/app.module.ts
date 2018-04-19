import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GetUsersService } from './services/get-users.service';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        GetUsersService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
