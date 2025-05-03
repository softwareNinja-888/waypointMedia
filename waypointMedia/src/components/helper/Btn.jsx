export function Btn({text='Place Order',bg='bg-lightBlue hover:bg-white',border='border border-lightBlue ',textColor='text-white hover:text-lightBlue',font='font-italiana font-bold',width='w-47'}){
    return (
        <>
            <div className={`flex justify-center py-3 cursor-pointer hover:rounded transition-all duration-500 ease-in-out ${text} ${textColor} ${font} ${bg} ${border} ${width} `} >
                {text}
            </div>
        </>
    )
}