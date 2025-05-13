export const DefaultColumn = ({ children }) => {
    return (
      <div className='w-full px-4 md:w-1/2 lg:w-1/3'>
        <div className='mb-12'>{children}</div>
      </div>
    )
  }  
 export  const NameInput = ({width='w-90',name,setName,section=''}) => {
    return (
      <>
        <label  htmlFor={`name${section}`} className='mb-[10px] block text-base font-Cal_Sans text-black'>
          Name
        </label>
        <div className='relative'>
          <input
            type='text'
            placeholder='Devid Jhon'
            id={`name${section}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${width} bg-transparent rounded-md border border-stroke py-[10px] pr-3 pl-12 outline-none transition focus:border-mainGreen focus:border-2 active:border-mainGreen disabled:cursor-default disabled:bg-gray-2 font-Poppins text-black`}
          />
          <span className='absolute top-1/2 left-4 -translate-y-1/2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.72 12.886a4.167 4.167 0 0 1 2.947-1.22h6.666a4.167 4.167 0 0 1 4.167 4.167v1.666a.833.833 0 1 1-1.667 0v-1.666a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v1.666a.833.833 0 1 1-1.667 0v-1.666a4.17 4.17 0 0 1 1.22-2.947ZM10 3.333a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.166 2.5a4.167 4.167 0 1 1 8.333 0 4.167 4.167 0 0 1-8.333 0Z"
                opacity={0.8}
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#9CA3AF"
              />
            </svg>
          </span>
        </div>
      </>
    )
  }
  
 export  const EmailInput = ({width='w-90',email,setEmail,section=''}) => {
    return (
      <>
        <label htmlFor={`email${section}`} className='mb-[10px] block text-base font-Cal_Sans text-black'>
          Email
        </label>
        <div className='relative'>
          <input
            type='email'
            id={`email${section}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='info@yourmail.com'
            className={` ${width} bg-transparent rounded-md border border-black py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-mainGreen focus:border-2 active:border-mainGreen disabled:cursor-default disabled:bg-gray-2 font-Poppins text-black`}
          />
          <span className='absolute top-1/2 left-4 -translate-y-1/2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={0.8} fillRule="evenodd" clipRule="evenodd" fill="#9CA3AF">
                <path d="M3.334 4.167A.838.838 0 0 0 2.501 5v10c0 .456.377.833.833.833h13.333a.838.838 0 0 0 .834-.833V5a.838.838 0 0 0-.834-.833H3.334ZM.834 5c0-1.377 1.123-2.5 2.5-2.5h13.333c1.377 0 2.5 1.123 2.5 2.5v10c0 1.377-1.123 2.5-2.5 2.5H3.334a2.505 2.505 0 0 1-2.5-2.5V5Z" />
                <path d="M.985 4.522a.833.833 0 0 1 1.16-.205l7.856 5.499 7.855-5.5a.833.833 0 1 1 .956 1.366l-8.333 5.833a.833.833 0 0 1-.956 0L1.19 5.682a.833.833 0 0 1-.205-1.16Z" />
              </g>
            </svg>
          </span>
        </div>
      </>
    )
  }
  
 export  const CompanyNameInput = ({width='w-90',companyName,setCompanyName,section=''}) => {
    return (
      <>
        <label htmlFor={`companyName${section}`} className='w-32 mb-[10px] block text-base font-Cal_Sans text-black'>
          Company Name
        </label>
        <div className='relative'>
          <input
            type='text'
            id={`companyName${section}`}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder='Pimjo Labs'
            className={` ${width} bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-mainGreen focus:border-2 active:border-mainGreen disabled:cursor-default disabled:bg-gray-2 font-Poppins text-black`}
          />
          <span className='absolute top-1/2 left-4 -translate-y-1/2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={0.8}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.33398 6.66667C2.87375 6.66667 2.50065 7.03976 2.50065 7.5V15.8333C2.50065 16.2936 2.87375 16.6667 3.33398 16.6667H16.6673C17.1276 16.6667 17.5007 16.2936 17.5007 15.8333V7.5C17.5007 7.03976 17.1276 6.66667 16.6673 6.66667H3.33398ZM0.833984 7.5C0.833984 6.11929 1.95327 5 3.33398 5H16.6673C18.048 5 19.1673 6.11929 19.1673 7.5V15.8333C19.1673 17.214 18.048 18.3333 16.6673 18.3333H3.33398C1.95327 18.3333 0.833984 17.214 0.833984 15.8333V7.5Z"
                  fill="#9CA3AF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.56622 2.39825C7.03506 1.92941 7.67094 1.66602 8.33398 1.66602H11.6673C12.3304 1.66602 12.9662 1.92941 13.4351 2.39825C13.9039 2.86709 14.1673 3.50297 14.1673 4.16602V17.4993C14.1673 17.9596 13.7942 18.3327 13.334 18.3327C12.8737 18.3327 12.5006 17.9596 12.5006 17.4993V4.16602C12.5006 3.945 12.4129 3.73304 12.2566 3.57676C12.1003 3.42048 11.8883 3.33268 11.6673 3.33268H8.33398C8.11297 3.33268 7.90101 3.42048 7.74473 3.57676C7.58845 3.73304 7.50065 3.945 7.50065 4.16602V17.4993C7.50065 17.9596 7.12755 18.3327 6.66732 18.3327C6.20708 18.3327 5.83398 17.9596 5.83398 17.4993V4.16602C5.83398 3.50297 6.09738 2.86709 6.56622 2.39825Z"
                  fill="#9CA3AF"
                />
              </g>
            </svg>
          </span>
        </div>
      </>
    )
  }
  
  export const MessageTextarea = ({width='w-90',message,setMessage,color='text-white', borderColor='border-white',section=''}) => {
    return (
      <>
        <label htmlFor={`message${section}`} className={`${color} mb-[10px] block text-base font-Cal_Sans text-black `}>
          Message
        </label>
        <div className='relative'>
          <textarea
            type='email'
            rows='6'
            id={`message${section}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type your message'
            className={`${width} ${color} bg-transparent rounded-md border border-black focus:border-mainGreen focus:border-2 active:border-mainGreen  p-3 pl-12 font-Poppins outline-none transition ${borderColor} disabled:bg-gray-2`}
          />
          <span className='absolute top-[18px] left-4'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={0.8}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.56622 3.23223C2.03506 2.76339 2.67094 2.5 3.33398 2.5H9.16732C9.62755 2.5 10.0006 2.8731 10.0006 3.33333C10.0006 3.79357 9.62755 4.16667 9.16732 4.16667H3.33398C3.11297 4.16667 2.90101 4.25446 2.74473 4.41074C2.58845 4.56702 2.50065 4.77899 2.50065 5V16.6667C2.50065 16.8877 2.58845 17.0996 2.74473 17.2559C2.90101 17.4122 3.11297 17.5 3.33398 17.5H15.0006C15.2217 17.5 15.4336 17.4122 15.5899 17.2559C15.7462 17.0996 15.834 16.8877 15.834 16.6667V10.8333C15.834 10.3731 16.2071 10 16.6673 10C17.1276 10 17.5006 10.3731 17.5006 10.8333V16.6667C17.5006 17.3297 17.2373 17.9656 16.7684 18.4344C16.2996 18.9033 15.6637 19.1667 15.0006 19.1667H3.33398C2.67094 19.1667 2.03506 18.9033 1.56622 18.4344C1.09738 17.9656 0.833984 17.3297 0.833984 16.6667V5C0.833984 4.33696 1.09738 3.70107 1.56622 3.23223Z"
                  fill="#9CA3AF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.6673 2.39909C16.4195 2.39909 16.1818 2.49754 16.0066 2.67278L8.25314 10.4262L7.81264 12.1882L9.57463 11.7477L17.3281 3.99427C17.5033 3.81903 17.6018 3.58135 17.6018 3.33352C17.6018 3.0857 17.5033 2.84802 17.3281 2.67278C17.1528 2.49754 16.9152 2.39909 16.6673 2.39909ZM14.8281 1.49427C15.3159 1.00647 15.9775 0.732422 16.6673 0.732422C17.3572 0.732422 18.0188 1.00647 18.5066 1.49427C18.9944 1.98207 19.2684 2.64367 19.2684 3.33352C19.2684 4.02338 18.9944 4.68498 18.5066 5.17278L10.5899 13.0894C10.4831 13.1962 10.3493 13.272 10.2028 13.3086L6.86945 14.142C6.58547 14.213 6.28506 14.1298 6.07808 13.9228C5.8711 13.7158 5.78789 13.4154 5.85888 13.1314L6.69222 9.79808C6.72885 9.65155 6.80461 9.51773 6.91141 9.41093L14.8281 1.49427Z"
                  fill="#9CA3AF"
                />
              </g>
            </svg>
          </span>
        </div>
      </>
    )
  }
