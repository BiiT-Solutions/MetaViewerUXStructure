import { Injectable } from '@angular/core';
import {MetaViewerStructureRootService} from "./meta-viewer-structure-root.service";
import {Observable} from "rxjs";
import {Collection} from "../models/collection";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private static readonly ROOT_PATH: string = '/forms'

  constructor(private rootService: MetaViewerStructureRootService, private httpClient: HttpClient) { }

  getJSON(formName:string): Observable<Collection> {
    return this.httpClient.get<Collection>(
      `${this.rootService.serverUrl}${FormService.ROOT_PATH}/${formName}/json`);
  }

  getXML(formName:string): Observable<XMLDocument> {
    return this.httpClient.get<XMLDocument>(
      `${this.rootService.serverUrl}${FormService.ROOT_PATH}/${formName}/xml`);
  }

  regenerate(formName:string): Observable<void> {
    return this.httpClient.put<void>(
      `${this.rootService.serverUrl}${FormService.ROOT_PATH}/${formName}/refresh`, undefined);
  }
}
