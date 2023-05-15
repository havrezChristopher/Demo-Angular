import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo01Component } from './demos/demo01/demo01.component';
import { Demo02Component } from './demos/demo02/demo02.component';
import { Demo03Component } from './demos/demo03/demo03.component';
import { Demo04Component } from './demos/demo04/demo04.component';
import { Demo05Component } from './demos/demo05/demo05.component';
import { Demo06Component } from './demos/demo06/demo06.component';
import { Demo07Component } from './demos/demo07/demo07.component';
import { GetValuePipe } from './demos/demo07/get-value.pipe';
import { SecondsToDHMSPipe } from './demos/demo07/seconds-to-dhms.pipe';
import { SumPipe } from './demos/demo07/sum.pipe';
import { Demo08Component } from './demos/demo08/demo08.component';
import { Demo09Component } from './demos/demo09/demo09.component';
import { Demo10Component } from './demos/demo10/demo10.component';
import { HighlightDirective } from './demos/demo10/highlight.directive';
import { PrepareRenderDirective } from './demos/demo10/prepare-render.directive';
import { ChildInputComponent } from './demos/demo11/child-input/child-input.component';
import { ChildNgcontentComponent } from './demos/demo11/child-ngcontent/child-ngcontent.component';
import { ChildOutputComponent } from './demos/demo11/child-output/child-output.component';
import { Demo11Component } from './demos/demo11/demo11.component';
import { Demo12Component } from './demos/demo12/demo12.component';
import { ChildComponent } from './demos/demo13/child/child.component';
import { Demo13Component } from './demos/demo13/demo13.component';
import { Demo14Component } from './demos/demo14/demo14.component';
import { Demo15Component } from './demos/demo15/demo15.component';
import { Demo16Component } from './demos/demo16/demo16.component';
import { Demo17Component } from './demos/demo17/demo17.component';
import { Demo17guardedComponent } from './demos/demo17/demo17guarded/demo17guarded.component';
import { Demo18Component } from './demos/demo18/demo18.component';
import { Demo19Component } from './demos/demo19/demo19.component';
import { Demo20Component } from './demos/demo20/demo20.component';
import { AddComponent } from './demos/demo21/add/add.component';
import { Demo21Component } from './demos/demo21/demo21.component';
import { EditComponent } from './demos/demo21/edit/edit.component';
import { Demo22Component } from './demos/demo22/demo22.component';
import { TokenInterceptor } from './demos/demo22/interceptors/token.interceptor';
import { DemosComponent } from './demos/demos.component';
import { ExercicesComponent } from './exercices/exercices.component';
import { Exo01Component } from './exercices/exo01/exo01.component';
import { Exo02Component } from './exercices/exo02/exo02.component';
import { Exo03Component } from './exercices/exo03/exo03.component';
import { Exo05Component } from './exercices/exo05/exo05.component';
import { ConvertisseurDegrePipe } from './exercices/exo07/convertisseur-degre.pipe';
import { Exo07Component } from './exercices/exo07/exo07.component';
import { ToCelsiusPipe } from './exercices/exo07/to-celsius.pipe';
import { ToFahrenheitPipe } from './exercices/exo07/to-fahrenheit.pipe';
import { Exo08Component } from './exercices/exo08/exo08.component';
import { Exo09Component } from './exercices/exo09/exo09.component';
import { Exo11Component } from './exercices/exo11/exo11.component';
import { ListeComponent } from './exercices/exo11/liste/liste.component';
import { Exo12Component } from './exercices/exo12/exo12.component';
import { ShoppingListComponent } from './exercices/exo12/shopping-list/shopping-list.component';
import { Exo15Component } from './exercices/exo15/exo15.component';
import { FourofourComponent } from './shared/components/fourofour/fourofour.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { Exo21Component } from './exercices/exo21/exo21.component';
import { DetailsComponent } from './exercices/exo21/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Demo01Component,
    Exo01Component,
    Demo02Component,
    Exo02Component,
    Demo03Component,
    Exo03Component,
    Demo04Component,
    Demo05Component,
    DemosComponent,
    FourofourComponent,
    NavbarComponent,
    Exo05Component,
    ExercicesComponent,
    Demo06Component,
    Demo07Component,
    SecondsToDHMSPipe,
    GetValuePipe,
    SumPipe,
    Exo07Component,
    ToFahrenheitPipe,
    ToCelsiusPipe,
    ConvertisseurDegrePipe,
    Demo08Component,
    Exo08Component,
    Demo09Component,
    Exo09Component,
    Demo10Component,
    PrepareRenderDirective,
    HighlightDirective,
    Demo11Component,
    ChildInputComponent,
    ChildOutputComponent,
    ChildNgcontentComponent,
    Exo11Component,
    ListeComponent,
    Demo12Component,
    Demo13Component,
    ChildComponent,
    Exo12Component,
    ShoppingListComponent,
    Demo14Component,
    Demo15Component,
    Exo15Component,
    Demo16Component,
    Demo17Component,
    Demo17guardedComponent,
    Demo18Component,
    Demo19Component,
    Demo20Component,
    Demo21Component,
    AddComponent,
    EditComponent,
    Demo22Component,
    Exo21Component,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Important pour le fonctionnement du Two-Way Binding
    ReactiveFormsModule, // Important pour le fonctionnement du FormGroup
    HttpClientModule, // Important pour le fonctionne du HttpClient
  ],
  providers: [
    // Permet d'injecter la langue FR partout dans l'application
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    // provide: indique que vous souhaitez enregistrer un intercepteur pour les requête HTTP
    // useCLass: la classe de votre intercepteur personnalité qu'on souhaite utiliser
    // multi: enregistrer plusieurs intercepteurs de type HTTP_INTERCEPTORS
    // • true : vous pouvez enregistrer plusieurs intercepteurs dans le même provider
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
