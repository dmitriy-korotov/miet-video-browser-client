import { useContext } from "react";
import { AlertContext } from "../components/providers/AlertProvider/AlertProvider";

export function useAlert() {
    return useContext(AlertContext);
}