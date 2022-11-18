import { getLocalePluralCase } from '@angular/common';
import { Injectable } from '@angular/core';

//este servicio es una clase que tiene inyectado un poco de codigo de angular
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public places = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://www.toureiffel.paris/sites/default/files/actualite/image_principale/vue_depuisjardins_webbanner_3.jpg',
      comments: ['Awsome place', 'woderfull experience']
    },

    {
      id: '2',
      title: 'Stuate of Liberty',
      imageURL: 'https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_185379_lr.jpg?w=1190&h=1772',
      comments: ['Awsome place2', 'woderfull experience2']
    }
  ]
  constructor() {}

  getPlaces(){
    return [...this.places]  //retorna una copia del array que esta arriba de datos
  }; 
  getPlace(placeId: string){
    //this.places.find(place =>)
    return{
      ...this.places.find(place =>{
        return place.id === placeId
      })
    }
  }
  addPlace(){}
  deletePlace(){}


  }

function getPlaces() {
  throw new Error('Function not implemented.');
}

