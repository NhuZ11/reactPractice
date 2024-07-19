import React ,{useState ,useRef} from 'react'
import Modal from 'react-modal'
import IdleTimerContain from '../Components/IdleTimerContain'


const ContactUs = () => {
const [modelIsOpen,setModelIsOpen] =useState(false)

  return (
    <div>
        <button onClick={()=>setModelIsOpen(true)} className='bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 '>Reveal Your Contact</button>
        <Modal isOpen={modelIsOpen}>
            <h2>Modal Title</h2>
            <p>Model Body</p>
            <button onClick={()=>setModelIsOpen(false)} className='bg-green-500 w-[180px] rounded-md font-medium mx-auto my-3 py-2 '>Close</button>
        </Modal>

        <div >
          <IdleTimerContain />
        </div>


    </div>
  )
}

export default ContactUs