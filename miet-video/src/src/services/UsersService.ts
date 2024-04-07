import { UserData, UserAuthorizationFormData } from "../types/user/User";
import Expected from "../types/Expected";



class TUsersService {

    api = "http://localhost:8080";
    userAgent = "miet-video-browser-client";

    async RegistrateUser(userData: UserData): Promise<Expected<string, string>> {
        try {
            const response = await fetch(this.api + "/v1/users", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent
                },
                body: JSON.stringify(userData)
            });
    
            let jsonBody = await response.json();
    
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["message"] });
            }
            return new Expected({ value: jsonBody["token"] });
        } catch (ex) {
            return new Expected({ error: JSON.stringify(ex) });
        }
    }

    async AuthorizateUser(data: UserAuthorizationFormData): Promise<Expected<string, string>> {
        try {
            const response = await fetch(this.api + "/v1/auth", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent
                },
                body: JSON.stringify(data)
            });
    
            let jsonBody = await response.json();
    
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["message"] });
            }
            return new Expected({ value: jsonBody["token"] });
        } catch (ex) {
            return new Expected({ error: JSON.stringify(ex) });
        }
    }

    async LogOut(token: string) { // TODO
        try {
            const response = await fetch(this.api + "/v1/auth", {
                method: "DELETE",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent
                },
                body: JSON.stringify({ token: token })
            });
    
            let jsonBody = await response.json();
    
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["message"] });
            }
            return new Expected({ value: jsonBody["token"] });
        } catch (ex) {
            return new Expected({ error: JSON.stringify(ex) });
        }
    }
}

export const UsersService = new TUsersService();