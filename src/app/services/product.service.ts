import { StaticDataSource } from '../models/mock-data';
import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';


@Injectable()
export class ProductService{
    products:Product[] = [];
    categories:string[]=[];

    constructor(private data:StaticDataSource){
        data.getProducts().subscribe(data=>{
            this.products = data;
            this.categories = data.map(p=>
                (p.category)).filter((c,index,array)=>
                    (array.indexOf(c)==index))
        })
    }

    getProducts(category:string = null):Product[]{
        return this.products.filter(p=>
            (category==null||category==p.category))
    }

    getProduct(id:number):Product{
        return this.products.find(p=>(p.id==id))
    }

    getCategories():string[]{
        return this.categories;
    }
}