import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';


@Injectable()
export class CartService{
    lines : CartLine[]=[];
    itemCount: number = 0;
    cartPrice:number = 0;

    addLine(product:Product,quantity:number=1){
        let line = this.lines.find(line=>
            (line.product.id ==product.id));
        if(line!=undefined){
            line.quantity+=quantity;
        }else{
            this.lines.push(new CartLine(product,quantity))
        }
        this.recalculate();
    }

    updateQuantity(product:Product,quantity:number){
        let line = this.lines.find(line=>
            (line.product.id ==product.id));
        if(line!=undefined){
            line.quantity=Number(quantity);
        }
        this.recalculate();
    }

    removeLine(id:number){
        let index = this.lines.findIndex(line=>
            (line.product.id ==id)
        )
        this.lines.splice(index);
        this.recalculate();
    }


    //clear the current cart
    clear(){
        this.lines=[];
        this.itemCount=0;
        this.cartPrice=0;
    }

    //recalculates current cart
    private recalculate(){
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l=>{
            this.itemCount+=l.quantity;
            this.cartPrice+=(l.quantity*l.product.price);
        })
    }

}

export class CartLine{
    product:Product;
    quantity:number
    constructor(product:Product,quantity:number){
        this.product=product;
        this.quantity=quantity;
    }
    
        get lineTotal(){
            return this.quantity*this.product.price;
        }
}