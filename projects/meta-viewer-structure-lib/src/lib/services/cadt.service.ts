import { Injectable } from '@angular/core';
import {MetaViewerStructureRootService} from "./meta-viewer-structure-root.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Collection} from "../models/collection";

@Injectable({
  providedIn: 'root'
})
export class CadtService {
  private static readonly ROOT_PATH: string = '/metaviewer'

  constructor(private rootService: MetaViewerStructureRootService, private httpClient: HttpClient) { }

  getJSON(): Observable<Collection> {
    return this.httpClient.get<Collection>(
      `${this.rootService.serverUrl}${CadtService.ROOT_PATH}/json`);
  }

  getXML(): Observable<XMLDocument> {
    return this.httpClient.get<XMLDocument>(
      `${this.rootService.serverUrl}${CadtService.ROOT_PATH}/xml`);
  }

  regenerate(): Observable<void> {
    return this.httpClient.put<void>(
      `${this.rootService.serverUrl}${CadtService.ROOT_PATH}/public/xml`, undefined);
  }

}
