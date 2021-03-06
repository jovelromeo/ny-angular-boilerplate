import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './pages/01mainframe/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule, MatButtonModule, MatCheckboxModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MyDashboardComponent } from './pages/01mainframe/my-dashboard/my-dashboard.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { LoadingScreenInterceptor } from './interceptors/loading.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/catalog',
    pathMatch: 'full'
  },
  { path: 'catalog', component: CatalogComponent },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'second-page', component: SecondPageComponent },
  { path: 'third-page', component: ThirdPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    MyTableComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    CatalogComponent,
    LoadingScreenComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingScreenInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})


export class AppModule { 

}
