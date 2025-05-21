
import carImage from "../../assets/CAR IMAGE.jpg"
import showPassWordIcon from "../../assets/SHOW PASSWORD.png"
import hidePasswordIcon from "../../assets/HIDE PASSWORD.png"
import  { useState } from "react"

const LoginPage = () => {

  
    const [Active, SetActive]=useState(false);

     const iconHandle=() =>{
      SetActive(!Active);
     }
  
  return (
    <div  className="flex h-screen ">
      
       <div className="w-1/2 ">
              <img src={carImage}
                className="w-full h-full "></img>
        </div>
      <div className="w-1/2  ">
      
        <h1 className=" text-center font-bold p-5 m-5 text-2xl">WELCOME TO LOGIN PAGE</h1>
        <div className="flex justify-center p-7    ">
          <div className="w-full h-full p-5 m-5 place-content-center rounded-t-lg rounded-b-lg bg-[#E6A895]  ">
            <form className="grid gap-4 ">
              <p className="text-center text-red-800 font-bold ">LOGIN</p>

              {/* USER NAME */}
              <label htmlFor="USERNAME" >Username :</label> 
              <input type="text" placeholder="enter your name " id="USERNAME" className="w-full border border-gray-300 rounded p-1 "></input>
             
             
             
            {/* PASSWORD AREA */}
              <div className="grid gap-4">
                <label htmlFor="PASSWORD">Password :</label>
                  <div className="relative">
                  <input type="password" placeholder="enter your password" id="PASSWORD" className="w-full border-2 border-gray-300 rounded p-1"> </input>
                  <img
                    src={Active ? showPassWordIcon : hidePasswordIcon} // Change icon based on Active state
                    alt="Password visibility icon"
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                    onClick={iconHandle} // Toggle the visibility
                  />
                </div>
                
              </div>
               
               {/* FORGET PASSWORD LINK */}
              <div className="text-end">
                <a href="" >Forget Password?</a>
              </div>

              {/* SUBMIT BUTTON */}
              <input type="submit" value="submit" className="w-full  bg-red-800 text-white py-2 px-4 rounded-full hover:bg-blue-500 "></input>
            </form>
          </div>
        </div>                
      </div>
    </div>
    
  )
}

export default LoginPage