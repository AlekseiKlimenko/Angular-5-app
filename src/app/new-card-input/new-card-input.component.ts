import {Component, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.css']
})
export class NewCardInputComponent implements OnInit {

  newCardForm: FormGroup;

  public newCard: any = {text: ''};
  @Output() onCardAdd = new EventEmitter<string>();

  @ViewChild('form') public form: NgForm;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(this.form)
    if (event.code === "Enter") {
      this.addCard(this.newCardForm.controls['text'].value);
    }
  }

  addCard(text) {
    this.onCardAdd.emit(text);
    this.newCardForm.controls['text'].setValue('');
  }

  constructor(fb: FormBuilder) {
    this.newCardForm = fb.group({
      'text':['', Validators.compose([Validators.required, Validators.minLength(2)])]
    })
  }


  ngOnInit() {
  }

}
