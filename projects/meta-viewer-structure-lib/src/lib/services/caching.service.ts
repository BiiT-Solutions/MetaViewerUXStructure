import { Injectable } from '@angular/core';
import {MetaViewerStructureRootService} from "./meta-viewer-structure-root.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  private static readonly ROOT_PATH: string = '/cache'
  constructor(private rootService: MetaViewerStructureRootService, private httpClient: HttpClient) { }

  clear(): void {
    this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${CachingService.ROOT_PATH}`);
  }

}
