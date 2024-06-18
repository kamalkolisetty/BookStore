import React from 'react'
import { AuthContext } from '../context/AuthProvider'
import { useContext } from 'react'
import Logout from './Logout'
const Contact = () => {
    const [authUser,setAuthUser] = useContext(AuthContext)
   // console.log(authUser)
    return (
        <>
            <div>
                <div className='min-h-screen' >
                    <div className='m-16 p-16 flex  justify-center'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/beautiful-clouds-scenery_23-2151604604.jpg?t=st=1718741451~exp=1718745051~hmac=d9528c4bd41a1779e2d8f27c2c9497975dc532cd65d8e7fa331a26204098cafe&w=1380" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Lets Get In Touch!👋</h2>
    <p>
    Looking forward to hear from you soon about your thoughts and ideas...😊    </p>
         <div>

         </div>
      
    <div className="card-actions justify-between">
    <button className="btn bg-green-200">  <a href="mailto:kamalkumarkolisetty@gmail.com">Gmail </a> </button>

      <button className="btn bg-green-200"> <a href="https://github.com/kamalkolisetty" target="_blank" rel="noopener noreferrer">GitHub</a></button>
    </div>
  </div>
</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact