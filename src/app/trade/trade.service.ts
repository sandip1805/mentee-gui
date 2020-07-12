
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Trade }  from './trade';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TradeService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private tradeUrl = 'http://localhost:8080/rest/trades';

     // Fetch all existing comments
     getTrades() : Observable<Trade[]> {
        // ...using get request
        return this.http.get(this.tradeUrl)
                    // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     addTrade (body: Object): Observable<Trade> {
         let bodyString = JSON.stringify(body); // Stringify payload
         let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options    = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.post(this.tradeUrl, body, options) // ...using post request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

     // Update a comment
     updateTrade (body: Object): Observable<Trade> {
         let bodyString = JSON.stringify(body); // Stringify payload
         let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options    = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.put(this.tradeUrl, body, options) // ...using put request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

     // Delete a comment
     removeTrade (id:string): Observable<Trade> {
         return this.http.delete(this.tradeUrl) // ...using put request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

}
