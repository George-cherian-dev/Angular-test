import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormBuilder, Validator, Validators } from '@angular/forms';
import { Feedback,ContactType } from '../shared/feedbackModel'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;
  @ViewChild('fform') feedbackFormDirective;

  constructor(
    private fb: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      telnum:[null,Validators.required],
      email:['',Validators.required],
      agree:false,
      contacttype: 'None',
      message: ''
    });
  }
  onSubmit(){
    this.feedback = this.feedbackForm.value;
    
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
  }

}
