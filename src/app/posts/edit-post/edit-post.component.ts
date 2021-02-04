import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPosts, getPostById } from '../state/posts.selector';
import { Post } from 'src/app/models/posts.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit,OnDestroy {

  post:Post;
  postForm:FormGroup;
  postSubscription:Subscription;
  constructor(private route:ActivatedRoute,private store:Store<AppState>) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id  = params.get('id');
      this.postSubscription = this.store.select(getPostById,{id}).subscribe(data=>{
       this.post = data;
       this.createForm(this.post);
      })
    })
  }
  ngOnDestroy(){
    if(this.postSubscription){
      this.postSubscription.unsubscribe()
    };
  }
  createForm(data){
    this.postForm = new FormGroup({
      title:new FormControl(data.title,[Validators.required,Validators.minLength(6)]),
      description: new FormControl(data.description,[Validators.required,Validators.minLength(10)])
    })
  }
}
