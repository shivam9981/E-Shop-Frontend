import { createAsyncThunk } from "@reduxjs/toolkit";

export const productmaledata = createAsyncThunk("product male data", async () => {
    const response = await fetch(`http://localhost:5000/api/auth/mydata/getallmaleproduct`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const mydata = await response.json();
    return mydata
})

export const productfemaledata = createAsyncThunk("product female data", async () => {
    const response = await fetch(`http://localhost:5000/api/auth/mydata/getallfemaleproduct`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const mydata = await response.json();
    return mydata
})

export const productchilddata = createAsyncThunk("product child data", async () => {
    const response = await fetch(`http://localhost:5000/api/auth/mydata/getallchildproduct`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const mydata = await response.json();
    return mydata
})

export const productDataByID = createAsyncThunk("product data by id", async (id) => {
    const response = await fetch(`http://localhost:5000/api/auth/mydata/getallproductbyid`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
    })
    const mydata = await response.json();
    return mydata
})

export const cartData = createAsyncThunk("product data by cart", async ({ id, val }) => {
    const response = await fetch(`http://localhost:5000/api/auth/mydata/cartproduct`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        },
        body: JSON.stringify({ id: id, quantity: val })
    })
    const mydata = await response.json();
    return mydata
})

export const cartDatacomplete = createAsyncThunk("product data complete", async () => {
    const response = await fetch(`http://localhost:5000/api/auth/mydata/cartproductdata`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        },
    })
    const mydata = await response.json();
    return mydata
})

export const cartDatadeleted = createAsyncThunk("cart data datated", async (id) => {
    const response = await fetch(`http://localhost:5000/api/auth/mydata/cartproductdatadelete`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        },
        body: JSON.stringify({ id })
    })
    const mydata = await response.json(id);
    return mydata
})


// user ratting feedback system

export const rate = createAsyncThunk("ratting", async ({ name, email, mobile, message, ratting, productid }) => {
    const response = await fetch(`http://localhost:5000/api/auth/mydata/ratting`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, mobile, message, ratting, productid })
    })
    const mydata = await response.json();
    return mydata
})

export const getrate = createAsyncThunk("ratting get", async (id) => {
    const response = await fetch(`http://localhost:5000/api/auth/mydata/getratting`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id })
    })
    const mydata = await response.json();
    return mydata
})