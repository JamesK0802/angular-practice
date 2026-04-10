import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-batch-master',
  imports: [FormsModule],
  templateUrl: './batch-master.html',
  styleUrl: './batch-master.css',
})
export class BatchMaster {

  newBatchObj: Batch = new Batch();
  http = inject(HttpClient);

  batchList = signal<Batch[]>([]);

  constructor() {
    this.getAllBatches();
  }

  getAllBatches() {
    this.http.get("https://api.freeprojectapi.com/api/FeesTracking/batches").subscribe({
      next: (results: any) => {
        this.batchList.set(results);
      },
      error: (error: any) => {
        alert(error.error.message)
      }
    })
  }
  onEditBatch(data: Batch) {
    const stringData = JSON.stringify(data);
    const strObj = JSON.parse(stringData);
    this.newBatchObj = strObj;
  }
  onUpdateBatch() {
    this.http.put("https://api.freeprojectapi.com/api/FeesTracking/batches/" + this.newBatchObj.batchId, this.newBatchObj).subscribe({
      next: (results: any) => {
        alert("Batch updated successfully");
        this.getAllBatches();
      },
      error: (error: any) => {
        alert(error.error.message)
      }
    })
  }
  onDeleteBatch(data: Batch) {
    const confirmDelete = confirm("Are you sure you want to delete this batch?");
    if (!confirmDelete) {
      return;
    }
    this.http.delete("https://api.freeprojectapi.com/api/FeesTracking/batches/" + data.batchId).subscribe({
      next: (results: any) => {
        alert("Batch deleted successfully");
        this.getAllBatches();
      },
      error: (error: any) => {
        alert(error.error.message)
      }
    })
  }
  onSaveBatch() {
    this.http.post("https://api.freeprojectapi.com/api/FeesTracking/batches", this.newBatchObj).subscribe({
      next: (results: any) => {
        alert("Batch created successfully with ID: " + results.batchId);
        this.getAllBatches();
      },
      error: (error: any) => {
        alert(error.error.message)
      }
    })
  }

  resetForm() {
    this.newBatchObj = new Batch();
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