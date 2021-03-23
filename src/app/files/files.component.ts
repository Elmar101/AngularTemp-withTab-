import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  opened: boolean=true;

  value1 = 'Vətəndaş müraciəti';
  constructor() { }

  ngOnInit(): void {
  }

}
