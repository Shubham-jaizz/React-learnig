import { useState,useEffect } from 'react'
import UseCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'
import './App.css'

function App() {
  let [amount, setAmount] = useState(0)
  let [from,setFrom] = useState("USD")
  let [to,setTo] = useState("INR")
  let [convertedAmount,setConvertedAmount] = useState(0)
  const data = UseCurrencyInfo(from);
  const data2 = UseCurrencyInfo(to);

  const options = Object.keys(data)
  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);

  }
  const convert = ()=>{
    setConvertedAmount(amount*data[to]);
  }
  useEffect(()=>{
    setConvertedAmount(amount*data[to]);
  },[amount,from,to])


  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url(https://images.pexels.com/photos/5197153/pexels-photo-5197153.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                       convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            currencyList={options}
                            amount ={amount}
                            onCurrencyChange={(currency)=>{setFrom(currency)}}
                            currencySelect = {from}
                            onAmountChange={(value)=>{setAmount(value)}}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            currencyList={options}
                            amount ={convertedAmount}
                            onCurrencyChange={(currency)=>{setTo(currency)}}
                            currencySelect = {to}
                            onAmountChange={(value)=>{setConvertedAmount(value)}}    
                        />
                    </div>
                    <button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                    >
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
