import { useState } from "react"
import PasswordSettings from "./PasswordSettings"
import PrivacyPolicySettings from "./PrivacyPolicySettings"
import ProfileEditSettings from "./ProfileEditSettings"
import TermsConditionsSettings from "./TermsConditionsSettings"

const GeneralSettings = () => {
const [tab, setTab] = useState<String>("Account Settings")
const [buttonColor,setbuttonColor] = useState<String>("transparent")


const handleRenderComponent = (tabText: String) => {
  setTab(tabText)
}
 
  return (
    <>
    <div className="p-5">
      <h1>Settings</h1>
      <div className="mt-4">
      <button onClick={()=>handleRenderComponent("Account Settings")} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ml-4 border border-blue-500 hover:border-transparent rounded">
      Account Settings
      </button>
      <button onClick={()=>handleRenderComponent("Change Password")} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 ml-4 border border-blue-500 hover:border-transparent rounded">
      Change Password
      </button>
      <button onClick={()=>handleRenderComponent("Privacy Policy")} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border ml-4 border-blue-500 hover:border-transparent rounded">
      Privacy Policy
      </button>
      <button onClick={()=>handleRenderComponent("Terms")} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border ml-4 border-blue-500 hover:border-transparent rounded">
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