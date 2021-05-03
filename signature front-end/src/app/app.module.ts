import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ShowSingComponent } from './components/show-sing/show-sing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { LastSingComponent } from './components/last-sing/last-sing.component';
import { ShowGroupsComponent } from './components/show-groups/show-groups.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HederComponent } from './components/heder/heder.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';










@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormInputComponent,
    ShowSingComponent,
    LastSingComponent,
    ShowGroupsComponent,
    HederComponent,
    ProgressBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
