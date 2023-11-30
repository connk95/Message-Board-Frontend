import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../user/user.type";
import { UserLoginData } from "./auth.type";

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ username, password }: UserLoginData) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/login", {
        username,
        password,
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const userLogout = createAsyncThunk(
  "auth/userLogout",
  async ({ username, password }: UserLoginData) => {
    try {
      const res = await axios.post("http://localhost:3000/auth/logout", {
        username,
        password,
      });
      return res;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ username, email, password }: User) => {
    const res = await axios.post("http://localhost:3000/users", {
      username,
      email,
      password,
    });

    return res.data;
  }
);
