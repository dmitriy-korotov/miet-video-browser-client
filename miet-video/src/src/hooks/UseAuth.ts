'use client';

import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider/AuthProvider";



export default function useAuth() {
    return useContext(AuthContext);
}