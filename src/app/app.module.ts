import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai3Component } from './components/bai3/bai3.component';
import { Bai2Component } from './components/bai2/bai2.component';
import { Bai1Component } from './components/bai1/bai1.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'bai1', pathMatch: 'full' },
  { path: 'bai1', component: Bai1Component },
  { path: 'bai2', component: Bai2Component },
  { path: 'bai3', component: Bai3Component },
];

@NgModule({
  declarations: [AppComponent, Bai3Component, Bai2Component, Bai1Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
