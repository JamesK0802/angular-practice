import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-batch-master',
  imports: [FormsModule],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster {
  
  newBatchObj : Batch = new Batch();
  http = inject(HttpClient);
  batchList: Batch[] = [];
  
  constructor() { 
    this.getAllBatches();   
  }

  getAllBatches() {
    this.http.get("https://api.freeprojectapi.com/api/FeesTracking/batches").subscribe({
      next:(results:any) => {
        this.batchList = results;
      },
      error:(error:any) => {
        alert(error.error.message)
      }
    })
  }
  onSaveBatch() {

    this.http.post("https://api.freeprojectapi.com/api/FeesTracking/batches", this.newBatchObj).subscribe({
      next:(results:any) => {
        alert("Batch created successfully with ID: " + results.batchId);
      },
      error:(error:any) => {
        alert(error.error.message)
      }
    })
  }
}

class Batch {
  batchId: number;
  batchName: string;
  createdDate: Date;

  constructor() {
    this.batchId = 0;
    this.batchName = "";
    this.createdDate = new Date();
  }
}