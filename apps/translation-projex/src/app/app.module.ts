import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco/transloco-root.module';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () =>
      import('@strategic-agenda/feature-characters').then(
        (module) => module.FeatureCharactersModule
      ),
  },
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    SharedModule,
    MenubarModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
