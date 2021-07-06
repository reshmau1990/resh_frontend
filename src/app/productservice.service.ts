import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  item= {
    title:'',
    author:'',
    genre:'',
    description:'',
    imageUrl:''}
  constructor( private http:HttpClient) { }
  server_address:string = '/api';
  getBook(id:any){
    return this.http.get(`${this.server_address}/books/` +id);
  }
  getBooks(){
    return this.http.get(`${this.server_address}/books`);
  }

  newProduct(item:any)
  {   
    return this.http.post(`${this.server_address}/books/insert`,{"book":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {

    return this.http.delete(`${this.server_address}/books/remove/` +id)

  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_address}/books/update`,book)
    .subscribe(data =>{console.log(data)})
  }
}
