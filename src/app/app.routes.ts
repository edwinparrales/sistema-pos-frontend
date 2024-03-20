import { Routes } from '@angular/router';
import {ProductoComponent} from "./componentes/producto/producto.component";
import {FilesystemComponent} from "./componentes/filesystem/filesystem.component";

export const routes: Routes = [
  {path:"producto-crear",component:ProductoComponent},
  {path:"media",component:FilesystemComponent},
];
