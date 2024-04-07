import { json } from "stream/consumers";
import { UserData, UserAuthorizationFormData } from "../types/user/User";
import Expected from "../types/expected";



class TUsersService {

    api = "http://localhsot:8080";
    userAgent = "miet-video-browser-client";

    async RegistrateUser(userData: UserData): Promise<Expected<string, string>> {
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
    }

    async AuthorizateUser(data: UserAuthorizationFormData): Promise<Expected<string, string>> {
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
    }

    LogOut() {

    }
}

export const UsersService = new TUsersService();