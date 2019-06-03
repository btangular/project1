import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path:'', component: HomeComponent, pathMatch: 'full' },
    // { path:'products', loadChildren:'./products/products.module#ProductModule' }
    { path:'products', component: ProductsListComponent }

]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]  
})
export class AppRoutingModule {}