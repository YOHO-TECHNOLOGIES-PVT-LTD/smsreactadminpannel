import { useState } from "react"
import PasswordSettings from "./PasswordSettings"
import ProfileEditSettings from "./ProfileEditSettings"
import { FONTS } from "../../constants/uiConstants"
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
        <h1 className="text-3xl top-0 text-[#9b111e] font-bold" style={{...FONTS.header}}>Settings</h1>
      </div>
      <div className="mt-10">
      <button style={{...FONTS.cardSubHeader}} onClick={()=>handleRenderComponent("Account Settings")} className={`bg-transparent focus:bg-orange-800 !focus:text-white focus:border-orange-800 border-orange-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 font-semibold !hover:text-white py-2 px-4 ml-4 border border-blue-500 hover:border-transparent rounded ${tab === "Account Settings" ? "bg-gradient-to-r from-red-600 to-red-800 !text-white" : "!text-orange-800"}`}>
      Account Settings
      </button>
      <button  style={{...FONTS.cardSubHeader}} onClick={()=>handleRenderComponent("Change Password")} className={`bg-transparent focus:bg-orange-800 !focus:text-white focus:border-orange-800 border-orange-800 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 font-semibold !hover:text-white py-2 px-4 ml-4 border border-blue-500 hover:border-transparent rounded ${tab === "Change Password" ? "!bg-gradient-to-r from-red-600 to-red-800 !text-white" : "!text-orange-800"}`}>
      Change Password
      </button>
      
    </div>
    </div>
    {tab === "Account Settings" && <div><ProfileEditSettings /></div> }
    {tab === "Change Password" && <div><PasswordSettings /></div> }      
     <div></div>
     <div></div>
     <div></div>
    </>
  )
}

export default GeneralSettings