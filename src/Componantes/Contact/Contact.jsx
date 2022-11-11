import React , {useState} from 'react'
import './Contact.scss'
import {FaStar, FaHeart} from 'react-icons/fa'
import {useForm } from 'react-hook-form'
export const Contact = () => {
  const {register, handleSubmit, formState : {errors}} = useForm()
  const [message, setMessage] = useState(false)

  const thanksMessage = () => {
    return setMessage(true)
  }

  
  return (
    <section className='contact py-5 mt-5 text-center'>
          <h2 className='fw-bold mt-3 fs-1 font-monospace'>CONTACT ME</h2>
          <div className="center-star text-dark position-relative d-flex justify-content-center align-items-center">
            <div className="line me-3"></div>
              <FaStar className='fs-4'/>
            <div className="line ms-3"></div>
          </div>

        <form onSubmit={handleSubmit(() => thanksMessage() )}>
          <div className="container text-start">

            <div className="name-inp position-relative mb-4">
            
            <input {...register('name', {required: '• Name is Requierd' })} type="text" name='name'  className='form-control mt-5 fs-5' placeholder='Name'  />
            <label>Name</label>
            <p className='mt-1 mb-3 text-danger'>
              {errors?.name?.message}
            </p>
            </div>

            <div className="email-inp position-relative mb-4">
            
            <input {...register('email' , {required: '• Email is Requierd' , pattern: {value:  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g  , message: '• This is not a correct Email format'} })} type="text" name='email'  className='form-control mt-3 fs-5' placeholder='Email' />
            <label>Email</label>
            <p className='mt-1 mb-3 text-danger'>
              {errors?.email?.message}
            </p>
            </div>

            <div className="phone-inp position-relative mb-4">
            <input {...register('phoneNumber' , {required: `• Phone number is Requierd`, valueAsNumber: true , maxLength : {value: 11 , message: "too short"} })} type="number" name='phoneNumber'  className='form-control mt-3 fs-5' placeholder='Phone Number'  />
            <label>Phone Number</label>
            <p className='mt-1 mb-3 text-danger'>
              {errors?.phoneNumber?.message}
            </p>
            </div>

            <div className="message-text position-relative">
            <textarea {...register('message' , {required: '• Message is Requierd' })} name="message" cols="10" rows="5" className='form-control fs-5' placeholder='Message' ></textarea>
            <label>Message</label>
            <p className='mt-1 mb-3 text-danger'>
              {errors?.message?.message}
            </p>
            </div>

            <input type="submit" className='btn text-white my-3 fs-5 p-3 px-5 rounded' value='Send' />
          </div>

          {message &&
                      <div className="thanks-message container">
                      <div className="alert alert-success mt-2" role="alert">
                          Thanks for contacting me <FaHeart /> I will reach you soon.
                        </div>
                    </div>
          }

        </form>


        </section>
  )
}


/* 

          <h2 className='fw-bold mt-3 text-white fs-1 font-monospace'>ABOUT</h2>
          <div className="center-star text-dark position-relative d-flex justify-content-center align-items-center">
            <div className="line me-3"></div>
            <FaStar className='fs-4 text-white'/>
            <div className="line ms-3"></div>
          </div>

*/