import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-reports',
  templateUrl: './user-reports.component.html',
  styleUrls: ['./user-reports.component.css']
})
export class UserReportsComponent implements OnInit {

  
  tableStyle1 =  {
    "color" : "white",
    "background-color" : "gray",
    "font-size" : "15px",
    "padding" : "20px",
  };

  tableStyle2 =  {
    "color" : "black",
    "background-color" : "white",
    "fompont-size" : "10px",
    "padding" : "20px"
  };
  reportes: any[] = [
    {id: 1, categoria: 'Calle', subcategoria: 'Bache', ubicacion: 'Campeche 53, Condesa, CDMX' },
    {id: 2, categoria: 'Fuga', subcategoria: 'Agua', ubicacion: 'Golfo Pérsico 32, Ecatepec, EDO MEX.' },
    {id: 3, categoria: 'Drenaje', subcategoria: 'Inundación', ubicacion: 'Calle del puente 222, San Bartolo, CDMX' },
    {id: 4, categoria: 'Falla eléctrica', subcategoria: 'Luminaria', ubicacion: 'Transmisiones 15, Prados Coapa, CDMX' },
    {id: 5, categoria: 'Calle', subcategoria: 'Árbol caído', ubicacion: 'Av. Santa Fe, Santa Fre, CDMX' },
    {id: 6, categoria: 'Drenaje', subcategoria: 'Inundación', ubicacion: 'Calz. tlalpan 558, Tlalpan, CDMX' },
    {id: 7, categoria: 'Derrumbre', subcategoria: 'N/A', ubicacion: 'Juarez 54, Cuajimalpa, CDMX' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
