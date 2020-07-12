
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Portfolio }  from './portfolio';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PortfolioService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private portfolioUrl = 'http://localhost:8080/rest/portfolio';

     // Fetch all existing comments
     getPortfolios() : Observable<Portfolio[]> {
        // ...using get request
        return this.http.get(this.portfolioUrl)
                    // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     addPortfolio (body: Object): Observable<Portfolio> {
         let bodyString = JSON.stringify(body); // Stringify payload
         let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options    = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.post(this.portfolioUrl, body, options) // ...using post request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

     // Update a comment
     updatePortfolio (body: Object): Observable<Portfolio> {
         let bodyString = JSON.stringify(body); // Stringify payload
         let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options    = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.post(this.portfolioUrl, body, options) // ...using put request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

     // Delete a comment
     removePortfolio (id:string): Observable<Portfolio> {
         return this.http.delete(this.portfolioUrl + '/' + id) // ...using put request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

}
