import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd } from '@angular/router';
import { Usuario } from 'src/app/domain/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario: Usuario=new Usuario();

  productos: any;

  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) {
    route.queryParams.subscribe(params => {
      console.log(params)
      this.usuario.nombre=params.nombre
    })  

   }
   guardar(){
     console.log(this.usuario);
     this.usuarioService.save(this.usuario);
   }

  ngOnInit() {
    
  }

}
