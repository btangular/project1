import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn:'root',
})

export class ProductsService{
    constructor(
        private http: HttpClient
    ){}

    getAllProducts():Observable<any>{
        return this.http.get(`http://5ceea7651c2baf00142cc26b.mockapi.io/api/Products`).pipe(map(res => {
            return res;
        }))
    }

    postProduct(data):Observable<any>{
        return this.http.get(`http://5ceea7651c2baf00142cc26b.mockapi.io/api/Products`, data).pipe(map(res=>{
            return res;
        }))
    }
}