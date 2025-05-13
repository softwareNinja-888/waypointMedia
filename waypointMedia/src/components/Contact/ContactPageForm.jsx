import React from 'react';
import { useState } from "react";
import { DefaultColumn, MessageTextarea,NameInput,EmailInput,CompanyNameInput } from './helperForm';

export function ContactPageForm() {

      const formBoldUrl = 'https://formbold.com/s/3N1yz'
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [companyName, setCompanyName] = useState("");
      const [message, setMessage] = useState("");
  
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [errors, setErrors] = useState({});
  
      const [isVisibleMsg, setIsVisibleMsg] = useState(true);
  
      // Function to validate form fields
      const validateForm = () => {
          let newErrors = {};
  
          if (!name.trim()) newErrors.name = "Name is required";
          if (!email.trim()) {
              newErrors.email = "Email is required";
          } else if (!/\S+@\S+\.\S+/.test(email)) {
              newErrors.email = "Invalid email format";
          }
          
  
          setErrors(newErrors);
          return Object.keys(newErrors).length === 0; // Returns true if no errors
      };
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          if (!validateForm()) return; // Stop if validation fails
  
          setIsSubmitting(true);
  
          const formData = { name, email, companyName, message };
          console.log('form Data: ',formData)
          try {
              const response = await fetch(formBoldUrl, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(formData),
              });
              console.log("Response:",response)
  
              if (response.ok) {
                  setIsSubmitted(true);
                  setName("");
                  setEmail("");
                  setCompanyName("");
                  setMessage("");
                  setErrors({});
              } else {
                  console.error("Error submitting form");
              }
          } catch (error) {
              console.error("Network error:", error);
          }
  
          setIsSubmitting(false);
      };

  return (
    <div className="bg-white text-black p-8 rounded-xl shadow-lg max-w-md mx-auto  overflow-hidden">
     
      
      <div className="">
        <h3 className="text-lg font-Cal_Sans mb-6">
          Let us know about your project & we will help you grow your business from scratch.
        </h3>
        
        <form  className="" onSubmit={handleSubmit}>

          <DefaultColumn>
            <NameInput name={name} setName={setName} section='Contact'/>
          </DefaultColumn>
          <DefaultColumn>
            <EmailInput email={email} setEmail={setEmail} section='Contact'/>
          </DefaultColumn> <DefaultColumn>
            <CompanyNameInput companyName={companyName} setCompanyName={setCompanyName} section='Contact'/>
          </DefaultColumn> <DefaultColumn>
            <MessageTextarea message={message} setMessage={setMessage} section='Contact' color="text-black" borderColor='focus:border-greenPrimary active:border-greenPrimary resize-none'/>
          </DefaultColumn>
          <button aria-label="Submit Form" id="submit_form" type="submit" className="bg-mainGreen border-none text-black text-sm trasition-all duration-500 hover:rounded-xl hover:scale-103 font-Roboto h-11 w-full" disabled={isSubmitting}>
            {isSubmitting ? (
                <>
                    <svg
                        className="animate-spin h-5 w-5 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-100"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                        ></path>
                    </svg>
                    Submitting...
                </>
            ) : (
                "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}


