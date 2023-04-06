import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Category } from '../../common/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
url='  http://localhost:3000/Product'
category: Category;
  constructor(private httpClient: HttpClient) {
    this.category = new Category()
   }
  ngOnInit(): void {
  }
  save(){
    this.httpClient.post(this.url,this.category).subscribe(data=>{
        console.log(data);
    });
  }
}
