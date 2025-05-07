import { useState } from "react";
import { TiTick } from "react-icons/ti";


function formatCurrency(currency,number) {

	const fixedNumber = Number(number).toFixed(2)
  // Convert to string and handle decimal part if present
  const parts = fixedNumber.toString().split('.');
  const wholePart = parts[0];
  const decimalPart = parts.length > 1 ? '.' + parts[1] : '';
  
  // Add spaces between thousands
  const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  
  // Return formatted number with R prefix
  return `${currency}` + ' ' + formattedWholePart ;
}

function PriceHead({name="",price=0,timeFrame}){
    console.log(timeFrame)

	const discount = 30;
	const yearlyPrice = price * 12;
	const discountedPrice = yearlyPrice - (yearlyPrice * (discount/100));

    return (
        <>
        
            <th className="px-4 py-8 text-center">
                <span className="text-base font-Roboto text-blue-600">{name}</span>
                <div className="text-3xl font-Cal_Sans">{timeFrame === 'monthly' ? (
                    <>
                        {price === 'Custom' ? 'Custom' : formatCurrency('R',price)}
                    </>
                ) : (
                    <>
                        {price === 'Custom' ? 'Custom' : formatCurrency('R',discountedPrice)}
                    </>
                )}</div>
            </th>
        </>
    )
}

function PriceRow({name="",starter='-',smartGrowth='-',fullBooking='-',}){

    const tick = <>
        <div className='flex items-center bg-grayBg px-1 rounded-full w-5 h-5 mx-auto'>
            <TiTick size={16}/>
        </div>
    </>

    return (
        <>
            <tr>
                <td className="py-4 pr-4 font-medium  text-black border-b border-gray-200">{name}</td>

                <td className="px-4 py-4 text-center  text-black border-b border-gray-200">{starter === 'tick' ? tick : starter}</td>

                <td className="px-4 py-4 text-center  text-black border-b border-gray-200">{smartGrowth === 'tick' ? tick : smartGrowth}</td>

                <td className="px-4 py-4 text-center text-black bg-yellowCustom border-b border-black/20">{fullBooking === 'tick' ? tick : fullBooking}</td>
            </tr>
            
        </>
        )
}
function GetStarted(){
    return (
        <>
               <td className="px-4 py-6 text-center">
                    <a href="#" title="" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                        Get Started
                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </td>

        </>
    )
}

export function PriceLg({information,timeFrame}){

    const services = information[2].services;
    const serviceTypes = information[2].pricing

    return (
        <>
        
        <div className="hidden mt-10 lg:block">
            
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="py-8 pr-4"></th>
                        {serviceTypes.map(type=>{
                            return <PriceHead name={type.type} price={type.price} timeFrame={timeFrame}/>
                        })}
    
                    </tr>
                </thead>

                <tbody>
                    {services.map(serv=>{
                        return <PriceRow name={serv.name} starter={serv.starter} smartGrowth={serv.smartGrowth} fullBooking={serv.fullBooking} />
                    })}        
                    <tr>
                        <td className="py-6 pr-4"></td>
                        <GetStarted/>
                        <GetStarted/>
                        <GetStarted/>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}