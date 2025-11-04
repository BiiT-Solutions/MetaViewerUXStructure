import { Injectable } from '@angular/core';
import {AuthService as AuthenticationService} from "@biit-solutions/authorization-services";
import {MetaViewerStructureRootService} from "./meta-viewer-structure-root.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthenticationService {

  constructor(rootService: MetaViewerStructureRootService, httpClient: HttpClient) {
    super(rootService, httpClient);
  }
}
