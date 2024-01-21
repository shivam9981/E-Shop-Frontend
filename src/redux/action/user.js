import { createAsyncThunk } from "@reduxjs/toolkit";

export const signin = createAsyncThunk("user singin", async (data) => {
    const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: data.name, email: data.email, mobile: data.mobile, password: data.password })
    })
    const mydata = await response.json();
    return mydata
})

export const login = createAsyncThunk("user login", async (data) => {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email, password: data.password })
    })
    const mydatal = await response.json();
    return mydatal
})

export const checkdata = createAsyncThunk("check user", async (mobile) => {
    const response = await fetch(`http://localhost:5000/api/auth/userexits`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile })
    })
    const mydata = await response.json();
    return mydata
})

export const forget = createAsyncThunk("forget password", async ({ password, mobile }) => {
    const response = await fetch(`http://localhost:5000/api/auth/forgetpass`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, mobile })
    })
    const mydata = await response.json();
    return mydata
})

export const addreshss = createAsyncThunk("addresh", async ({ name, email, mobile, city, addresh, road, country, state, pin, distict }) => {
    const response = await fetch(`http://localhost:5000/api/auth/payments/addresh`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        },
        body: JSON.stringify({ name, email, mobile, city, addresh, road, country, state, pin, distict })
    })
    const mydata = await response.json();
    return mydata
})

export const getaddresh = createAsyncThunk("get addresh", async () => {
    const response = await fetch(`http://localhost:5000/api/auth/payments/getaddresh`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        }
    })
    const mydata = await response.json();
    return mydata
})

export const getaddreshbyid = createAsyncThunk("addresh by id", async (id) => {
    const response = await fetch(`http://localhost:5000/api/auth/payments/addreshbyid`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        },
        body: JSON.stringify({ id: id.id })
    })
    const mydata = await response.json();
    return mydata
})


export const contect = createAsyncThunk("contect", async ({ name, email, mobile, message }) => {
    console.log(name, email, mobile, message)
    const response = await fetch(`http://localhost:5000/api/auth/contect`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, mobile, message })
    })
    const mydata = await response.json();
    return mydata
})