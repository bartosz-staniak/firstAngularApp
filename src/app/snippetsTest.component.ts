import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root', //was 'selector-name'
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: 'snippetsTest.component.html'
})

export class NameComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}