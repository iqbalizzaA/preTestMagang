import Image from 'next/image'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa';
import { MdLockOutline} from 'react-icons/md';
import gambar from '../app/logo.svg';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
    <head>
      <title>Login-Nextjs</title>
      <link rel ="icon" hreff="/favicon.ico"/>
    </head>
    
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-3/5 p-5">
          <div className="text-right font-bold">
            <span className="text-yellow-400">Company</span>Name
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">Sign in to Account</h2>
            <div className="border-2 w-10 border-yellow-400 inline-block mb-2"></div>
            <div className="flex justify-center my-2">
              <a href="#"  className="border-2 border-grey-200 rounded-full p-3 mx-1">
                <FaFacebookF className="text-sm"/>
              </a>
              <a href="#" className="border-2 border-grey-200 rounded-full p-3 mx-1">
                <FaLinkedinIn className="text-sm"/>
              </a>
              <a href="#" className="border-2 border-grey-200 rounded-full p-3 mx-1">
                <FaGoogle className="text-sm"/>
              </a>
            </div>{/*social media */}
            <p className="text-gray-400 my-3">or sign in with another account</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <FaRegEnvelope className=" text-gray-400 m-2"/>
                <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                <MdLockOutline className=" text-gray-400 m-2"/>
                <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
              </div>
              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs"><input type="checkbox" name="remember" className="mr-1"></input>Remember me</label>
                <a href="#" className="text-xs">Forgot Password?</a>
              </div>
              
              <a href="#" className="border-2 border-yellow-500 text-yellow-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-yellow-500 hover:text-white">Sign In</a>

            </div>
          </div>
        </div>

        {/*sign in section */}
        <div className="w-2/5 bg-yellow-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">

          <h3 className="text-3xl font-bold mb-2">Welcome!</h3>
            <Image
              src={gambar}
              alt="Picture of the author"
              width={500}
              height={600}/>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Start journey with us.</p>
          <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-yellow-500">Sign Up</a>
        </div>
      </div>
    </main>
    </div>
  )
}
