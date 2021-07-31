import { pipe } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';

export function filterResponse<T>() {
  return pipe(
    filter((event: HttpEvent<T>) => event.type === HttpEventType.Response ),
    map((res: HttpEvent<T> extends HttpResponse<T> ?  HttpResponse<T> : any ) => res ? res.body : null)
  );
}

export function uploadProgress<T>(cb: (progress: number, event: HttpEvent<T> ) => void) {
  return tap( (event: HttpEvent<T>) => {
    if ( event.type === HttpEventType.UploadProgress) {
      cb( Math.round( ( event.loaded * 100 ) / ( event.total  ? event.total :  1 ) ), event );
    }
  });
}