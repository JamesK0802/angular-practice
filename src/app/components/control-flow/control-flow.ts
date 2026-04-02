import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isOfferCodeAvailable: boolean = false;
  isSuccessDivVisible : WritableSignal<boolean> = signal(false);

  studentTotalMark: number= 70;

  offerList : String[] = [
    "20% off for Paytm",
    "10% off for gpay",
    "20% off for ICCI",
    "20% online banking"
  ]

  productCatList: String[] = [
    "Mobile",
    "Laptop",
    "Mouse",
    "Keyboard"
  ]

  employeeList = [
    {name:"AA", city:"Canberra", isActive:false},
    {name:"bb", city:"sydney", isActive:false},
    {name:"cc", city:"Canberra", isActive:false},
    {name:"dd", city:"melbourne", isActive:true},
    {name:"ee", city:"perth", isActive:true},
  ]
  toggleVisability() {
    this.isSuccessDivVisible.set(!this.isSuccessDivVisible())
  }
}
