import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

import {CategoriaComponent} from './pages/categoria/categoria.component';

const routerM:Routes = [
    {path: '', component:HomeComponent},
    {path: 'categoria', component:CategoriaComponent}

]

export const appRouter = RouterModule.forRoot(routerM);
