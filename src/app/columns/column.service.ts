
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Column }  from './column';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ColumnService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private columnUrl = 'http://localhost:8080/rest/columns';

     // Fetch all existing comments
     getColumns() : Observable<Column[]> {
        // ...using get request
        return this.http.get(this.columnUrl)
                    // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     // Fetch all existing comments
     getColumnsByPortfolioId(portfolioId) : Observable<Column[]> {
         // ...using get request
         let pathParams = '/byPortfolioId?portfolioId='+portfolioId;
         return this.http.get(this.columnUrl + pathParams)
                     // ...and calling .json() on the response to return data
                     .map((res:Response) => res.json())
                     //...errors if any
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     addColumn (body: Object): Observable<Column> {
         let bodyString = JSON.stringify(body); // Stringify payload
         let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options    = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.post(this.columnUrl, body, options) // ...using post request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

     addColumns (body: Object): Observable<Column[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options    = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.columnUrl + '/batch', body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

     // Update a comment
     updateColumn (body: Object): Observable<Column> {
         let bodyString = JSON.stringify(body); // Stringify payload
         let headers    = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
         let options    = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.put(`${this.columnUrl}/${body['id']}`, body, options) // ...using put request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

     // Delete a comment
     removeColumn (id:string): Observable<Column> {
         return this.http.delete(`${this.columnUrl}/${id}`) // ...using put request
                          .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
     }

}
