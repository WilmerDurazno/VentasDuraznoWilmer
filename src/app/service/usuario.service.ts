import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public asf: AngularFirestore) { }

  save(usuario: Usuario){
    const refUsuarios = this.asf.collection("usuarios")
    if(usuario.id == null){
      usuario.id == this.asf.createId();
      usuario.activo=true;
    }
    refUsuarios.doc(usuario.id).set(Object.assign({}, usuario));
  }

  getproducto(): Observable<any[]>{
    return this.asf.collection("productos",
            ref=> ref.where("activo","==",true)).valueChanges();
  }
}
