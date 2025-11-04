import { Injectable } from '@angular/core';
import {SessionService as AuthSessionService} from "@biit-solutions/authorization-services";
import {Constants} from "../constants";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class SessionService extends AuthSessionService{

  constructor(authService: AuthService) {
    super(authService, Constants.SESSION_STORAGE.CONTEXT);
  }
}
