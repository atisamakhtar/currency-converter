"use client"

import React from 'react';
import { useState } from 'react';
import CurrencyShortCodes from "../app/page";

const Currency = ({ currencies }) => {

    // console.log("CurrencyShortCodes", currencies)

    const [fromCurrency, setFromCurrency] = useState("GBP");
    const [toCurrency, setToCurrency] = useState("JPY");
    const [amount, setAmount] = useState(1);
    const [reqAmount, setReqAmount] = useState(290);

    const submitHandler = (event) => {
        event.preventDefault();
        fixerCurrencyConverter(fromCurrency, toCurrency, amount);
        // RunCurrencyConverter(fromCurrency, toCurrency, amount);
    }

    const fixerCurrencyConverter = async (fromCur, toCur, amountToBeConverted) => {
        const res = await fetch(`http://data.fixer.io/api/latest?access_key=f61da53f3905dc40a51f6bb8fbf1de68`);
        // & from = ${fromCur}
        // & to = ${toCur}
        // & amount = ${amountToBeConverted}`);

        // const res = await fetch(`http://data.fixer.io/api/convert
        // ? access_key = f61da53f3905dc40a51f6bb8fbf1de68
        // & from = GBP
        // & to = JPY
        // & amount = 25`)

        const data = await res.json();
        console.log(data);
    }

    // const RunCurrencyConverter = async (from, to, amount) => {

    //     from = from.toUpperCase;
    //     to = to.toUpperCase;

    //     const url = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${amount}`;

    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '8c1b752faamsh9f0e6438e7b8fd7p102ea0jsnd9b7c459d412',
    //             'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await fetch(url, options);
    //         const result = await response.text();
    //         setReqAmount(result);
    //         console.log(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <section>
            <form action="" onSubmit={submitHandler}>
                <div className='my-5'>
                    <label className='block font-semibold' htmlFor="amount">Enter Amount to be converted</label>
                    <input className='px-[5px] py-[0.5px] border-2 border-stone-300' type="number" placeholder='1' id='from' step="0.01" min="1" />
                </div>
                <div className='my-5'>
                    <label className='block font-semibold' htmlFor="from">Enter From Which Currency</label>
                    <select onChange={(e) => {
                        // console.log(e.target.value);
                        setFromCurrency(e.target.value)
                    }} className='px-3 py-[0.5px] border-2 border-stone-300' type="text" id='from'>
                        <option>Select</option>
                        {currencies.map((curr, ind) => {
                            return <option key={ind} >{curr}</option>
                        })}
                    </select>
                </div>
                <div className='my-5'>
                    <label className='block font-semibold' htmlFor="to">To Which Currency you want to convert</label>
                    <select onChange={(e) => {
                        // console.log(e.target.value);
                        setToCurrency(e.target.value)
                    }} className='px-3 py-[0.5px] border-2 border-stone-300' type="text" id='from'>
                        <option>Select</option>
                        {currencies.map((curr, ind) => {
                            return <option key={ind}>{curr}</option>
                        })}
                    </select>
                </div>
                <input className='px-3 py-2 bg-slate-900 text-white hover:bg-slate-700' type="submit" value="Convert now !" />
            </form>

            {/* || reqAmount != null */}
            {(reqAmount) && <div className='my-3' >
                Amount {amount} from {fromCurrency} to {toCurrency} is {reqAmount}
            </div>}

        </section>
    )
}

export default Currency