import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';
import { Feedback,ContactType } from '../shared/feedbackModel';
import { flyInOut,expand } from '../../animations/app.animations';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],  
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    expand(),
    flyInOut()
  ]
})
export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;

  contactType = ContactType;
  feedbackForm: FormGroup;
  feedback: Feedback;
  errMsg:string;
  dataReady:boolean = true;
  
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };

  constructor(
    private fb: FormBuilder,
    private feedbackService : FeedbackService
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname:['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum:[null,[Validators.required, Validators.pattern]],
      email:['',[Validators.required,, Validators.email]],
      agree:false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges.subscribe( data =>{
      this.onValueChanged(data);
    }); 
    this.onValueChanged();
  }
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    for (let field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        let control =  this.feedbackForm.get(field);
        if (control && control.dirty && !control.valid) {
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] +=  this.validationMessages[field][key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit(){
    let Tempfeedback:Feedback = this.feedbackForm.value;
    this.dataReady = false ;
    this.feedbackForm.reset({
        firstname:'',
        lastname:'',
        telnum:null,
        email:'',
        agree:false,
        contacttype: 'None',
        message: ''
    });
    this.feedbackFormDirective.resetForm(); 
    this.onValueChanged();

    this.feedbackService.postFeedback(Tempfeedback).subscribe((feedback) =>{
      this.feedback = feedback;
      this.dataReady = true;
      
      this.errMsg = '';
      setTimeout(() => { this.emptyFeedbackVariable(); },5000);
    },(error) => {
 
     this.errMsg = <any>error;
     setTimeout(() => {  
       this.dataReady = true;
       this.errMsg = '';
     },5000);
    });
  }
  
  emptyFeedbackVariable(){
    this.feedback = null; 
  }

}
