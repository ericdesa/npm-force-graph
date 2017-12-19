// core
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

// pages
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.page';

// components
import { GraphComponent } from './components/graph/graph.component';

// services
import { DependencyService } from './services/dependency.service';

@NgModule({
    declarations: [
        // angular
        AppComponent,

        // pages
        HomePageComponent,

        // components
        GraphComponent,
    ],

    imports: [
        // angular
        BrowserModule,
        HttpModule,
    ],

    providers: [
        DependencyService,
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
