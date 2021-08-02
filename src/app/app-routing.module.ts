import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/Ventas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/ventas/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/Ventas/carrito/carrito.module').then( m => m.CarritoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
