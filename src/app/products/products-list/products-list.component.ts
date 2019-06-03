import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  Products : any;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.productsService.getAllProducts().subscribe(res =>{
      this.Products = res;
    })
  }

  changeRoute(){
    this.router.navigateByUrl('/products/form');
  }
}
