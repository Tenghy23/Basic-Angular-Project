import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class TestService{
    private testingPhrase: string;

    constructor(){

    }

    getServiceCall(){
        return "Call from testService";
    } 
}