import React from 'react'

const PaymentMethod = () => {
  return (
    <div className="mb-5 bg-green-400 flex flex-col items-center px-4 sm:px-6 md:px-8">
      <div className="my-5 px-4 sm:px-8 bg-red-800 text-center">
        <h1 className="my-4 text-2xl sm:text-3xl font-bold">Payment We <span className="text-yellow-400">Accept</span></h1>
        <p className="mb-4 text-sm sm:text-base">
          We accept all major cryptocurrencies and fiat payment methods to make your <br className="hidden sm:block" /> 
          investment process easier with our platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-16 sm:w-20 bg-dark p-2 rounded-lg">
            <img src="./images/bitcoinlogo.jpg" alt="bitcoin" className="w-full h-auto" />
          </div>
          <div className="w-16 sm:w-20 bg-dark p-2 rounded-lg">
            <img src="./images/Ethereumlogo.jpg" alt="ethereum" className="w-full h-auto" />
          </div>
          <div className="w-16 sm:w-20 bg-dark p-2 rounded-lg">
            <img src="./images/binancelogo.jpg" alt="litecoin" className="w-full h-auto" />
          </div>
          <div className="w-16 sm:w-20 bg-dark p-2 rounded-lg">
            <img src="./images/blockchainlogo.jpg" alt="ripple" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentMethod