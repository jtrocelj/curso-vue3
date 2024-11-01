import type { User } from "@/modules/auth/interfaces/user.interfaces";

export interface Product {
    id:          string;
    title:       string;
    price:       number;
    description: string;
    slug:        string;
    stock:       number;
    sizes:       Size[];
    gender:      string;
    tags:        string[];
    images:      string[];
    user:        User;
}

export enum Size {
    L = "L",
    M = "M",
    S = "S",
    Xl = "XL",
    Xs = "XS",
    Xxl = "XXL",
}




export enum Email {
    Test1GoogleCOM = "test1@google.com",
}

export enum FullName {
    TestOne = "Test One",
}

export enum Role {
    Admin = "admin",
}
