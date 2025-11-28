import { Routes } from '@angular/router';
import { Contador } from './contador/contador';
import { Matatopos } from './mata-topos/mata-topos';
import { Carrera } from './carrera/carrera';
import { EyeCandy } from './eye-candy/eye-candy';
import { ListaPersonajes } from './lista-personajes/lista-personajes';
import { FormularioRegistro } from './formulario-registro/formulario-registro';
import { FormularioHalloween } from './formulario-halloween/formulario-halloween';
import { Kanban } from './kanban/kanban';

export const routes: Routes = [
    { path: 'contador', component: Contador},
    { path: 'mata-topos', component: Matatopos},
    { path: 'carrera', component: Carrera},
    { path: 'eyeCandy', component: EyeCandy},
    { path: 'lista-personajes', component: ListaPersonajes},
    { path: 'formularioRegistro', component: FormularioRegistro},
    { path: 'formularioHalloween', component: FormularioHalloween},
    { path: 'kanban', component: Kanban}

];
