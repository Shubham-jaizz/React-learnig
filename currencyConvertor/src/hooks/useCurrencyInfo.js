import React from 'react'
import { useEffect,useState } from 'react'

function UseCurrencyInfo(currency) {
    let [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/0056986024f41d4850f09b92/latest/${currency}`)
        .then((response)=> response.json())
        .then(response =>{setData(response.conversion_rates)})
        console.log(data);

    },[currency])
    return data;
   
}
//this is the part in which we learnt how we use to make custom hooks


export default UseCurrencyInfo
