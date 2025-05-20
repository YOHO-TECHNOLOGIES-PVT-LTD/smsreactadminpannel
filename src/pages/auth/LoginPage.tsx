
import carImage from "../../assets/CAR IMAGE.jpg"

const LoginPage = () => {


  return (
    <div  className="flex h-screen ">
      
       <div className="w-1/2 ">
              <img src={carImage}
                className="w-full h-full "></img>
        </div>
      <div className="w-1/2  ">
      
      
        <div className="flex justify-center p-7   ">
          <div className="w-full h-full p-5 m-10 place-content-center rounded-t-lg rounded-b-lg bg-[#E6A895]  ">
            <form className="grid gap-4 ">
              <p className="text-center text-red-800 font-bold ">LOGIN</p>
              <label htmlFor="USERNAME" >Usename :</label> 
              <input type="text" placeholder="enter your name" id="USERNAME" className="w-full border-2 border-gray-300 rounded p-1"></input>
              <label htmlFor="PASSWORD">Password :</label> 
              <input type="text" placeholder="enter your password" id="PASSWORD" className="w-full border-2 border-gray-300 rounded p-1"></input> 
              <div className="text-end">
                <a href="" >Forget Password?</a>
              </div>
              <input type="submit" value="submit" className="w-full  bg-red-800 text-white py-2 px-4 rounded-full hover:bg-blue-500 "></input>
            </form>
          </div>
        </div>

                          
                         
                      
      </div>
    </div>
    
  )
}

export default LoginPage