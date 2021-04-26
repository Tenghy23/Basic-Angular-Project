import { Component, OnInit } from '@angular/core';
import { TestService } from '../service/testSvc.service';

@Component({
  selector: 'DependencyInjection',
  templateUrl: 'dependencyInjection.component.html',
  styleUrls: ['dependencyInjection.component.scss'],
})
export class DependencyInjectionComponent implements OnInit {
  constructor(private testService: TestService) { }

  private testingPhrase: string;

  ngOnInit() {
    this.testingPhrase = this.testService.getServiceCall();
  }
}

