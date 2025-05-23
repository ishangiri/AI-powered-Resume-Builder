import { useResumeStore } from '../../store/ResumeStore';

const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 bg-white";

const PersonalDetails = () => {
  const firstName = useResumeStore(state => state.firstName);
  const lastName = useResumeStore(state => state.lastName);
  const phone = useResumeStore(state => state.phone);
  const email = useResumeStore(state => state.email);
  const link = useResumeStore(state => state.link);
  const address = useResumeStore(state => state.address);

  const setFirstName = useResumeStore(state => state.setFirstName);
  const setLastName = useResumeStore(state => state.setLastName);
  const setPhone = useResumeStore(state => state.setPhone);
  const setEmail = useResumeStore(state => state.setEmail);
  const setLink = useResumeStore(state => state.setLink);
  const setAddress = useResumeStore(state => state.setAddress);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className={inputClasses} placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input className={inputClasses} placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className={inputClasses} placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
        <input className={inputClasses} placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input className={inputClasses} placeholder="Website / Portfolio Link" value={link} onChange={e => setLink(e.target.value)} />
        <input className={inputClasses} placeholder="Location" value={address} onChange={e => setAddress(e.target.value)} />
      </div>
    </div>
  );
};

export default PersonalDetails;
