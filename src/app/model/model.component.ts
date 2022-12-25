import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModellogService } from '../service/modellog.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  

  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    
  }

}

