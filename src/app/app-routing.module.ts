import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //array when exist una serie de objetos 
  {
    path: 'home',
    //viene al home y este componente va a cargar el resto de files 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    //esto hace que apenas vaya al puerto 8100 vaya al home 
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  { 
    path: 'places',
    children: [
      {
        path: ":placeId", //ojo estos dos puntos antes son re impotantes
        loadChildren: () => import('./places/place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
      },
      {
        path: "",
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      }

    ]
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
