"use client"

import React from 'react';
import { useState } from 'react';
import CurrencyShortCodes from "../app/page";

const Currency = ({ currencies }) => {

    // console.log("CurrencyShortCodes", currencies)

    const [fromCurrency, setFromCurrency] = useState("GBP");
    const [toCurrency, setToCurrency] = useState("JPY");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState();

    const submitHandler = (event) => {
        event.preventDefault();
        fixerCurrencyConverter(fromCurrency, toCurrency, amount);
        // RunCurrencyConverter(fromCurrency, toCurrency, amount);
    }

    const fixerCurrencyConverter = async (fromCur, toCur, amountToBeConverted) => {

        try {
            const res = await fetch(`http://data.fixer.io/api/latest?access_key=${process.env.NEXT_PUBLIC_TOKEN_KEY_FIXER}`);

            const data = await res.json();
            console.log("data", data);
        } catch(error) {
            console.error('An error occurred:', error.message);
        }

        // setConvertedAmount((
        //     data.rates[toCurrency] / data.rates[fromCurrency]
        // ).toFixed(3)
        // );

    }

    // console.log("token", process.env.NEXT_PUBLIC_TOKEN_KEY_FIXER);
    // console.log("token", `http://data.fixer.io/api/latest?access_key=${process.env.NEXT_PUBLIC_TOKEN_KEY_FIXER}`);

    return (
        <section className='md:w-[25vw] mt-5 md:mt-16 md:m-auto mx-5' >
            <h1 className='font-bold text-2xl' >Currency Coverter</h1>
            <form action="" onSubmit={submitHandler}>
                <div className='my-5'>
                    <label className='mb-1 block font-semibold' htmlFor="amount">Enter Amount to be converted</label>
                    <input onChange={e => {
                        setAmount(e.target.value);
                    }} className='md:w-[100%] w-40 px-[5px] py-[0.5px] border-l-2 border-y-2 border-stone-300' type="number" placeholder='1' id='from' step="0.01" min="1" />

                    <select onChange={(e) => {
                        // console.log(e.target.value);
                        setFromCurrency(e.target.value)
                    }} className='px-3 py-[1.9px] border-r-2 border-y-2 border-stone-300' type="text" id='from'>
                        <option>Select</option>
                        {currencies.map((curr, ind) => {
                            return <option key={ind} >{curr}</option>
                        })}
                    </select>
                </div>

                <div className='my-5'>
                    <label className='mb-1 block font-semibold' htmlFor="to">To Which Currency you want to convert</label>
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

            {/* || convertedAmount != null */}
            {(convertedAmount) && <div className='my-3' >
                Amount {amount} from {fromCurrency} to {toCurrency} is <span className='font-semibold' >{convertedAmount}</span>
            </div>}

        </section>
    )
}

export default Currency