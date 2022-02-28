import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { StockGroup } from 'src/app/models';
import { StockGroupService } from 'src/app/services/stock-group.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-stock-group-form',
  templateUrl: './stock-group-form.component.html',
  styleUrls: ['./stock-group-form.component.scss'],
})
export class StockGroupFormComponent implements OnInit {
  groupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    stocks: new FormControl([]),
  });

  matcher = new MyErrorStateMatcher();

  constructor(private stockGroupService: StockGroupService) {}

  ngOnInit(): void {}

  submitGroup(groupForm: any): void {
    const group: StockGroup = this.groupForm.value;

    console.log(group);

    this.stockGroupService.add(group);

    groupForm.resetForm();
  }
}
