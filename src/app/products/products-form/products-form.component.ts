import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  // formGroup: FormGroup;
  // id: number;
  // product: any;

  // constructor(
  //   private route: ActivatedRoute,
  //   private fb: FormBuilder,
  //   private productService: ProductsService,
  //   private location: Location) {}

  ngOnInit() {
    // this.id = Number(this.route.snapshot.paramMap.get("id"));
    // console.log(this.id);
    // this.buildForm();
  }

  // buildForm() {
  //   this.formGroup = this.fb.group({
  //     name: [''],
  //     createdAt: [''],
  //     image: ['']
  //   });

    // if (this.id > 0) {
    //   this.productService.getIdProduct(this.id).subscribe(res => {
    //     this.product = res;
    //     this.formGroup.setValue({
    //       name: this.product.name,
    //       image: this.product.image,
    //       createdAt: this.product.createdAt
    //     })
    //   })
    // }
  // }

  // onSubmit() {
  //    if (this.id == 0){
  //     this.productService.postProduct(this.formGroup.value).subscribe(res => {
  //       this.location.back();
  //     })
  //   }
    // } else{
    //   this.productService.putIdProduct(this.id, this.formGroup.value).subscribe (res =>{
    //     this.location.back();
    //   })
    // }
    
//    }
 }
