import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  //@Input() user: number;
  public postItems: any[];
  id: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts?userId=' + this.id).subscribe(data => {
      //this.postId = data.id;
     ;
      if (data != null) {
        debugger
        this.postItems = data;
      }
    })
  }

}
