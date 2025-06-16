// import { IoIosAddCircleOutline } from "react-icons/io";
import { FONTS } from "../../constants/uiConstants"
import { MdUpgrade } from "react-icons/md";

const ProfileEditSettings = () => {
  return (
    <div className="p-5" style={{fontFamily: FONTS.header.fontFamily}}>
      <div >
        <h1 className="!font-bold text-xl" style={{...FONTS.cardheader}}>Profile</h1>
        <h6 style={{...FONTS.subParagraph}}>Update your photo and personal details here</h6>
      </div>
     <form className="mt-6">
        <div  className="grid grid-cols-2 gap-8">
         <div>
            <label style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">First name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="John" required />
        </div>
        <div>
            <label style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">Last name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="DuraiRaj" required />
        </div>
        <div>
            <label style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">Email Address</label>
            <input type="email" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="John@gmail.com" required />
        </div>
        <div>
            <label style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">Phone Number</label>
            <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="0123456789" required />
        </div>
        <div>
            <label style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">Address</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="Door no, Address" required />
        </div>
        <div>
            <label  style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">Country</label>
            <select id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4">
                <option>Choose a country</option>
                <option value="London">London</option>
                <option value="Switcherland">Switcherland</option>
                <option value="Canada">Canada</option>
                <option value="Paris">Paris</option>
                <option value="Japan">Japan</option>
                <option value="America">America</option>
                <option value="Antartica">Antartica</option>
                <option value="Melbourne">Melbourne</option>
                </select>
            
        </div>
        <div>
            <label style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">Date of Birth</label>
            <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="John" required />
        </div>
        <div>
            <label style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">Gender</label>
            <select id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4">
                <option>Choose a Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
        </div>
         {/* <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Skills</label>
            <select id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4">
                <option>select</option>
                <option value="Leadership">Leadership</option>
                <option value="Management">Management</option>
                <option value="Data Analysis">Data Analysis</option>
                </select>
        </div>
         <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Profession</label>
            <select id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4">
                <option>select</option>
                <option value="IT Manager">IT Manager</option>
                <option value="Software Developer">Software Developer</option>
                </select>
        </div> */}
         <div>
            <label style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">Company Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="Company name" required />
        </div>
         <div>
            <label style={{...FONTS.paragraph}} htmlFor="first_name" className="block mb-2 text-sm font-medium !text-gray-900 dark:text-grey">Company Website</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="http://companyname.com/" required />
        </div>
        </div>
        <div className="mt-10">
             <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-grey">Add your bio</label>
            <textarea id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-6 h-32" placeholder="John" required />
        </div>
        <div className="mt-10">
            <h1 className="font-bold text-2xl !text-gray-900" style={{...FONTS.paragraph}}>Your Photo</h1>
            <h3 className="!text-gray-900" style={{...FONTS.subParagraph}}>THis will be displayed on profile</h3>
            
<div className="flex items-center justify-center w-full mt-8">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
        </div>
        <div>
        {/* <div className="mt-9">
            <h1 className="font-bold text-2xl">Social Profiles</h1>
            <div  className="grid grid-cols-2 gap-8 mt-3">
               <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="Facebook" required />
        </div> */}
        {/* <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">X</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="X" required />
        </div> */}
        {/* <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Linkedin</label>
            <input type="email" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="John" required />
        </div> */}
        {/* <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Youtube</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-3/4" placeholder="Youtube" required />
        </div> */}
            </div>
           
        </div>
         <div className="flex gap-3 mt-10">
             <button className="w-20 h-10 rounded-lg text-white" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}>Cancel</button>
             <button className="flex rounded-lg h-10 w-auto pt-2 pr-2 text-white" style={{ background: "linear-gradient(44.99deg,#700808 11%,#d23c3c 102.34%)" }}><MdUpgrade className="text-2xl"/> Update </button>
             </div>
     </form>
    </div>
  )
}

export default ProfileEditSettings;
