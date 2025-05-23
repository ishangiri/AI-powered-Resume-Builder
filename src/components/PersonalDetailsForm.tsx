import React, { useCallback } from 'react';
import { useResumeStore } from "../store/ResumeStore";

interface FormProps {
  onSubmit: () => void;
}

const PersonalDetailsForm = ({ onSubmit }: FormProps) => {
  // Using individual selectors to prevent unnecessary re-renders
  const firstName = useResumeStore(state => state.firstName);
  const lastName = useResumeStore(state => state.lastName);
  const email = useResumeStore(state => state.email);
  const phone = useResumeStore(state => state.phone);
  const address = useResumeStore(state => state.address);
  const link = useResumeStore(state => state.link);
  
  // Using individual selectors for setters
  const setFirstName = useResumeStore(state => state.setFirstName);
  const setLastName = useResumeStore(state => state.setLastName);
  const setEmail = useResumeStore(state => state.setEmail);
  const setPhone = useResumeStore(state => state.setPhone);
  const setAddress = useResumeStore(state => state.setAddress);
  const setLink = useResumeStore(state => state.setLink);

  // Memoize change handlers to prevent unnecessary re-renders
  const handleFirstNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }, [setFirstName]);

  const handleLastNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }, [setLastName]);

  const handlePhoneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }, [setPhone]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, [setEmail]);

  const handleLinkChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  }, [setLink]);

  const handleAddressChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  }, [setAddress]);

  return (
    <div className="bg-gray-50 p-5 border-blue-950 border-2 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Personal Details</h2>
      
      <div className="flex flex-row justify-center gap-4 p-4">
        <input 
          value={firstName}
          onChange={handleFirstNameChange}
          type="text" 
          placeholder="First Name" 
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full focus:border-blue-500 focus:outline-none" 
        />
        <input 
          value={lastName}
          onChange={handleLastNameChange}
          type="text" 
          placeholder="Last Name" 
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full focus:border-blue-500 focus:outline-none" 
        />
      </div>
      
      <div className="flex flex-row justify-center gap-4 p-4">
        <input 
          value={phone}
          onChange={handlePhoneChange}
          type="tel" 
          placeholder="Phone" 
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full focus:border-blue-500 focus:outline-none" 
        />
        <input 
          value={email}
          onChange={handleEmailChange}
          type="email" 
          placeholder="Email" 
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full focus:border-blue-500 focus:outline-none" 
        />
      </div>
      
      <div className="flex flex-row justify-center gap-4 p-4">
        <input 
          value={link}
          onChange={handleLinkChange}
          type="url" 
          placeholder="Website Link" 
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full focus:border-blue-500 focus:outline-none" 
        />
        <input 
          value={address}
          onChange={handleAddressChange}
          type="text" 
          placeholder="Location" 
          className="border-2 border-gray-300 rounded-md p-2 mb-4 w-full focus:border-blue-500 focus:outline-none" 
        />
      </div>
      
      <div className="flex flex-row justify-center">
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-200" 
          onClick={onSubmit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;