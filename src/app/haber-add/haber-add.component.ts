import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HaberList } from '../haber-list/haber-list';
import { HaberAddService } from '../services/haber-add.service';

@Component({
  selector: 'app-haber-add',
  templateUrl: './haber-add.component.html',
  styleUrls: ['./haber-add.component.css'],
})
export class HaberAddComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private haberAddService: HaberAddService
  ) {}

  ngOnInit() {
    this.createHaberAddForm();
  }
  haberAddForm!: FormGroup;
  model: HaberList = new HaberList();
  createHaberAddForm() {
    this.haberAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      owner: ['', Validators.required],
    });
  }
  haberAdd() {
    if (this.haberAddForm.valid) {
      this.model = Object.assign({}, this.haberAddForm.value);
      this.haberAddService.addHaber(this.model).subscribe((data) => {
        console.log(data);
        this.haberAddForm.reset();
      });
    }
  }
}
