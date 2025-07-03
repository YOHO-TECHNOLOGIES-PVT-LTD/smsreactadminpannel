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
     <button
  onClick={() => handleRenderComponent("Account Settings")}
  style={{ ...FONTS.cardSubHeader, color: tab === "Account Settings" ? "#fff" : "" }} // avoid setting color for hover here
  className={`bg-transparent border border-[#9b111e] "text-[#9b111e]" ml-4 py-2 px-4 rounded-3xl  font-semibold
      
    focus:bg-orange-800 focus:text-white focus:border-orange-800
    ${tab === "Account Settings" ? "bg-[#9b111e] text-white" : "text-[#9b111e]"}`}
>
  Account Settings
</button>

      <button  style={{...FONTS.cardSubHeader}} onClick={()=>handleRenderComponent("Change Password")} className={` font-semibold text-white py-2 px-4 ml-4 border border-[#9b111e] rounded-3xl ${tab === "Change Password" ? "!bg-[#9b111e] !text-white" : "!text-[#9b111e "}`}>
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