// api.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { environment, GenericApiResponse, ServerResponseError, Waitlist_APIs } from '../global-imports';

@Injectable({ providedIn: 'root' })
export class WaitlistService  {

    constructor(private http: HttpClient) { }

    async AddToWaitlist(data: any): Promise<GenericApiResponse> {
        const url = `${environment.ServerUrl}${Waitlist_APIs.AddToWaitlistApi}`;

        try {
            const ServerResponse = await firstValueFrom(
                this.http.post<GenericApiResponse>(url, data, { observe: 'response' })
            );

            const error = await ServerResponseError(ServerResponse);
            if (error) return error;

            const responseData = ServerResponse.body as GenericApiResponse;
            return responseData;

        } catch (error) {
            return {
                status: false,
                message: 'Something went wrong...'
            };
        }
    }

}
