import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  agreement!: string;
  agreements: string[] = ['Razıyam', 'Razı deyiləm'];
  opened:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
