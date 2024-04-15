import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TokenStorageService } from "../services/token-storage.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class tokenGuard implements CanActivate {
    constructor(private tokenstorage: TokenStorageService, private router: Router){}

    canActivate(): boolean{

        if(this.tokenstorage.getToken()){
            return true
        } else {
            this.router.navigate(['register'])
            return false
        }
        
    }
}