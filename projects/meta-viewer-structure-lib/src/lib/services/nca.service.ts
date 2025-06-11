import { Injectable } from '@angular/core';
import {MetaViewerStructureRootService} from "./meta-viewer-structure-root.service";
import {Observable} from "rxjs";
import {Collection} from "../models/collection";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NcaService {
  private static readonly ROOT_PATH: string = '/nca'

  constructor(private rootService: MetaViewerStructureRootService, private httpClient: HttpClient) { }

  getJSON(): Observable<Collection> {
    return this.httpClient.get<Collection>(
      `${this.rootService.serverUrl}${NcaService.ROOT_PATH}/json`);
  }

  getXML(): Observable<XMLDocument> {
    return this.httpClient.get<XMLDocument>(
      `${this.rootService.serverUrl}${NcaService.ROOT_PATH}/xml`);
  }

  regenerate(): Observable<void> {
    return this.httpClient.put<void>(
      `${this.rootService.serverUrl}${NcaService.ROOT_PATH}/refresh`, undefined);
  }
}
