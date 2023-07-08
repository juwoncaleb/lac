import React from 'react'

export default function Career() {
    return (
        <div>
            <div className='contact_first_div'>
                <div className='contact_me'>  <p className='career_head'>Careers at Lasena</p>
                    <p className='con_sub'>With a vision to provide value, wellness, and lasting change, we at OGC foods are looking for like minds who are able to work with us to achieve our vision not just for Nigeria but even beyond. If we have available openings, you can find them here:</p>

                    <button className='career_btn'>
                        CAREER OPPORTUNITIES
                    </button>
                </div>
            </div>
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
                        <input className='input_feild' placeholder=' Your email'/>
                        <p className='text-left form_head mt-6'>Message</p>
                        <input className='input_feild_message ' placeholder=' ' />
                        <button className='form_submit'>
                            Submit
                        </button>
                    </div>
                </center>

            </div>
        </div>
    )
}
