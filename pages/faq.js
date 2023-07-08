import React from 'react'
import FaqsCard from '../components/faq';

export default function Faq() {
    return (
        <div>
            <center>
                <FaqsCard />
                <div className='water_carry'>
                    <center>
                        <p className='contaaa'>Contact us</p>
                        <p>Our friendly team would love to hear from you.</p>
                    </center>

                    <center>
                        <div className='contact_form'>
                            <p className='text-left form_head'>Name</p>
                            <input className='input_feild' placeholder='  Your name' />
                            <p className='text-left form_head mt-6' >Email</p>
                            <input className='input_feild' placeholder=' Your email' />
                            <p className='text-left form_head mt-6'>Message</p>
                            <input className='input_feild_message ' placeholder=' ' />
                            <button className='form_submit'>
                                Submit
                            </button>
                        </div>
                    </center>

                </div>
            </center>

        </div>
    )
}
