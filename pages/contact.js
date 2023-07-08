import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 div_marg gap-10'>
                <img src='./man.png' />
                <div>
                    <p className='contact_us_head'>Contact us</p>
                    <p className='friend_me'>Our friendly team would love to hear from you.</p>
                    <p className='con_headers'>Name</p>
                    <input className='contact_inout' />
                    <p className='con_headers'>Email</p>

                    <input className='contact_inout' />
                    <p className='con_headers'>Message</p>
                    <input className='con_messag' />
                    <button className='sub_cont'>
                        Submit
                    </button>
                </div>

            </div>
            <div className='mt-20 talk'>
                <center>
                    <p className='contaaa mt-12'>Talk to lasena</p>
                    <p>At Lasena, we have an open-arms policy towards all forms of enquiries and feedback, so please contact us here</p>
                </center>
                <div className='grid md:grid-cols-3 mt-20 gap-2 mb-10 grid-cols-1'>
                    <div className='card'>
                        <img src='./Email.png' />
                        <p className='mt-10'>Email</p>
                        <p className='mt-10'>Enim duis occaecat ipsum excepteur duis occaecat dolore. Ipsum aliqua et deserunt veniam ea enim Lorem incididunt. Ea adipisicing ipsum officia consectetur minim ad irure.</p>
                        <p className='mt-10'>hello@lasena.com</p>

                    </div>
                    <div className='card'>
                        <img src='./Email.png' />
                        <p className='mt-10'>Email</p>
                        <p className='mt-10'>Enim duis occaecat ipsum excepteur duis occaecat dolore. Ipsum aliqua et deserunt veniam ea enim Lorem incididunt. Ea adipisicing ipsum officia consectetur minim ad irure.</p>
                        <p className='mt-10'>hello@lasena.com</p>
                    </div>
                    <div className='card'>
                        <img src='./Email.png' />
                        <p className='mt-10'>Email</p>
                        <p className='mt-10'>Enim duis occaecat ipsum excepteur duis occaecat dolore. Ipsum aliqua et deserunt veniam ea enim Lorem incididunt. Ea adipisicing ipsum officia consectetur minim ad irure.</p>
                        <p className='mt-10'>hello@lasena.com</p>
                    </div>
                </div>
            </div>
            <div className=' div_marg grid md:grid-cols-2 grid-cols-1 mt-20'>
                <div className='connect_div'>
                    <p className='connect'>Connect With Lasena</p>
                    <p>At Lasena we foster a richer experience of connection, growth, and community. Join the Lasena community today to find out firsthand about freebies, FREE masterclasses, and FREE content educating you about all the ways water can help give you along with your immediate community of family and friends a richer experience of life.</p>
                    <div className='mt-10'>
                        <img src='./fbb.png' />
                        <img className='mt-6' src='./tele.png' />
                    </div>
                </div>
                <img className='mt-6' src='./wa.png' />

            </div>
        </div>
    )
}
