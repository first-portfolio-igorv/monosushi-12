import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductInfoComponent } from './pages/product/product-info/product-info.component';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp} from '@angular/fire/app';
import { provideStorage, getStorage} from '@angular/fire/storage';
import { provideFirestore, getFirestore} from '@angular/fire/firestore';
import { provideAuth, getAuth} from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
    provideFirestore(()=> getFirestore()),
    provideAuth(()=>getAuth()),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
