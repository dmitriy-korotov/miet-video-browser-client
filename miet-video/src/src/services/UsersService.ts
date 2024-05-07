import { UserData, UserAuthorizationFormData } from "../types/user/User";
import Expected from "../types/Expected";



class TUsersService {

    api = "http://localhost:80";
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
                if (response.status == 401) {
                    return new Expected({ error: "User with such login and password is not registrated in Orioks" });
                } else if (response.status == 409) {
                    return new Expected({ error: "Such user is already registrated" });
                } else {
                    return new Expected({ error: "Unexpected server error" });
                }
            }
            return new Expected({ value: jsonBody["token"] });
        } catch (ex) {
            return new Expected({ error: "Server is not response" });
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
            console.log(jsonBody);
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["error_message"] });
            }
            return new Expected({ value: jsonBody["session_token"] });
        } catch (ex) {
            return new Expected({ error: "Server is not response" });
        }
    }

    async LogOut(token: string) {
        try {
            const response = await fetch(this.api + "/v1/logout", {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    UserAgent: this.userAgent,
                    Authorization: token
                },
            });
    
            let jsonBody = await response.json();
    
            if (!response.ok) {
                console.log(jsonBody);
                return new Expected({ error: jsonBody["error"]["error_message"] });
            }
            return new Expected({ value: jsonBody["token"] });
        } catch (ex) {
            return new Expected({ error: JSON.stringify(ex) });
        }
    }
}

export const UsersService = new TUsersService();