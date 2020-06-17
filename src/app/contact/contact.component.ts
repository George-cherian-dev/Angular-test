import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validator } from '@angular/forms';
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
  constructor(
    private fb: FormBuilder
  ) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname:'',
      lastname:'',
      telnum:'',
      email:'',
      agree:false,
      contacttype: 'None',
      message: ''
    });
  }
  onSubmit(){
    this.feedback = this.feedbackForm.value;
    this.feedbackForm.reset();
  }

}
