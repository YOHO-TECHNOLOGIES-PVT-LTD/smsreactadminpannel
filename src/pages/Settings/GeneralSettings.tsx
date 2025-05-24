import { useState } from "react"
import PasswordSettings from "./PasswordSettings"
import PrivacyPolicySettings from "./PrivacyPolicySettings"
import ProfileEditSettings from "./ProfileEditSettings"
import TermsConditionsSettings from "./TermsConditionsSettings"

const GeneralSettings = () => {
const [tab, setTab] = useState<string>("Account Settings")
// const [buttonColor,setbuttonColor] = useState<string>("transparent")


const handleRenderComponent = (tabText: string) => {
  setTab(tabText)
}
 
  return (
    <>
    
    <div className="p-5">
      <div className="border-b-2 border-orange-700 pb-8">
        <h1 className="text-4xl text-orange-700 top-0 font-bold">Settings</h1>
      </div>
      <div className="mt-10">
      <button onClick={()=>handleRenderComponent("Account Settings")} className="bg-transparent focus:bg-orange-800 focus:text-white focus:border-orange-800 border-orange-800 hover:bg-orange-800 text-orange-800 font-semibold hover:text-white py-2 px-4 ml-4 border border-blue-500 hover:border-transparent rounded">
      Account Settings
      </button>
      <button onClick={()=>handleRenderComponent("Change Password")} className="bg-transparent focus:bg-orange-800 focus:text-white hover:bg-orange-800 text-orange-800 font-semibold hover:text-white py-2 px-4 ml-4 border border-orange-800 hover:border-transparent rounded">
      Change Password
      </button>
      <button onClick={()=>handleRenderComponent("Privacy Policy")} className="bg-transparent focus:bg-orange-800 focus:text-white hover:bg-orange-800 text-orange-800 font-semibold hover:text-white py-2 px-4 border ml-4 border-orange-800 hover:border-transparent rounded">
      Privacy Policy
      </button>
      <button onClick={()=>handleRenderComponent("Terms")} className="bg-transparent focus:bg-orange-800 focus:text-white hover:bg-orange-800 text-orange-800 font-semibold hover:text-white py-2 px-4 border ml-4 border-orange-800 hover:border-transparent rounded">
      Terms & Conditions
      </button>
    </div>
    </div>
    {tab === "Account Settings" && <div><ProfileEditSettings /></div> }
    {tab === "Change Password" && <div><PasswordSettings /></div> }
    {tab === "Privacy Policy" && <div><PrivacyPolicySettings /></div> }
    {tab === "Terms" && <div><TermsConditionsSettings /></div> }
      
     <div></div>
     <div></div>
     <div></div>
    </>
  )
}

export default GeneralSettings