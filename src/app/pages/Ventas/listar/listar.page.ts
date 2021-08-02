import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editar(nombre: string){
    let params: NavigationExtras={
      queryParams:{
        nombre:nombre
      }
    }
  }

}
