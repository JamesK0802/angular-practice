import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-competation',
  imports: [ReactiveFormsModule],
  templateUrl: './project-competation.html',
  styleUrl: './project-competation.css',
})
export class ProjectCompetation {

  projectForm: FormGroup= new FormGroup({
    competitionID : new FormControl(0),
    title : new FormControl(''),
    description : new FormControl(''),
    startDate : new FormControl(''),
    endDate : new FormControl(''),
    status : new FormControl('')
  }); 


}
