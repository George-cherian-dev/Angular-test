import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params,ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common'
import { Dish, } from '../../shared/dish';
import { Comment } from '../../shared/comments';
import { DishService } from '../../services/dish.service'
import { switchMap } from 'rxjs/operators';
import { FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';
import { visibility } from '../../../animations/app.animations';


 
@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.scss'],
  providers: [DatePipe],
  animations: [
    visibility()
  ]
})
export class DishItemComponent implements OnInit {

  selectedDish: Dish ;
  dishIds: string [];
  prev: number;
  next:number;
  errMess: string;
  errMessUpd: string;

  
  @ViewChild('fform') commentFormDirective;

  commentForm: FormGroup;
  comment: Comment;
  visibility = 'shown';
  
  formErrors = {
    'author': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'message': {
      'required':      'Message is required.'
    },
  };

  constructor(
    private dishService:DishService,
    private route: ActivatedRoute,
    private location:Location,
    private fb: FormBuilder,
    public datepipe: DatePipe,
    @Inject('BaseURL') public baseURL

  ) { 
    this.createForm();
  }


  ngOnInit(): void {

    this.dishService.getDishIds().subscribe(dishIds =>{
      this.dishIds = dishIds
    });

      this.route.params.subscribe( (params: Params) => {
        this.visibility = 'hidden'; 
        this.selectedDish = null;
        this.dishService.getDish(params['id'])
        .subscribe((dish) => {
          this.selectedDish = dish;
          this.setPrevNext(dish);
          this.visibility = 'shown';
        },(error)=> {
          this.errMess = <any>error;
        });
      }
      );
  }
  
  createForm(){
    this.commentForm = this.fb.group({
      author:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating:[5,[Validators.required, Validators.pattern]],
      comment: ['',Validators.required]
    });

    this.commentForm.valueChanges.subscribe( data =>{
      this.onValueChanged(data);
    }); 
    this.onValueChanged();
  }
  
  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    
    for (let field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        let control =  this.commentForm.get(field);
        if (control && control.dirty && !control.valid) {
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] +=  this.validationMessages[field][key] + ' ';
            }
          }
        }
      }
    }
    
    if(this.commentForm.valid){
      let intermediateComment = this.commentForm.value;
      intermediateComment['date'] = this.datepipe.transform(new Date(), 'MMM dd yyyy') ;
      this.comment = intermediateComment;
    }else{
      this.comment = null;
    }
  }
  
  setPrevNext(dish:Dish){
    let index = this.dishIds.indexOf(dish.id);
    this.prev = (this.dishIds.length + index - 1)% this.dishIds.length;
    this.next = (index + 1)% this.dishIds.length;
  }
  goBack(){
    this.location.back();
  }
  
  onSubmit(){
    let intermediateComment = this.commentForm.value;
    intermediateComment['date'] = this.datepipe.transform(new Date(), 'MMM dd yyyy') ;
    // this.comment = null;
    // this.selectedDish.comments.push(intermediateComment);
    let newDish = this.selectedDish
    newDish.comments.push(intermediateComment);
    this.dishService.putDish(newDish)
    .subscribe((dish) => {
      this.selectedDish = dish;
    },(error)=> {
      this.errMessUpd = <any>error;
    });

    this.commentFormDirective.resetForm(); 
    this.onValueChanged();
    this.commentForm.reset({
      author:'',
        rating:5,
        comment: ''
    });
  }

}
