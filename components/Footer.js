import React from 'react'

export default function Footer() {
    return (
        <div className='div_marg footer gap-4 grid md:grid-cols-2 grid-cols-1 '>
            <div className='sub_div'>
                <img className='footer_logo mb-4' src='./logo.png' />
                <p className='sub_footer_text'>Join our newsletter to stay up in the know</p>
                <div className='flex mt-4'>
                    <input className='newsletter_in' />
                    <button className='subscribe'>
                        Subscribe
                    </button>
                </div>
                <p className='mt-6 sub_footer_text'>By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.</p>
            </div>


            <div className='grid grid-cols-3'>
                <div>
                    <p className='footer_header_texts'>LESANA WATER</p>
                    <p className='footer_header_subexts'>Lasena As a Brand</p>
                    <p className='footer_header_subexts ft_sub'>FAQ’s & More</p>

                    <p className='footer_header_subexts ft_sub'>Shop</p>

                    <p className='footer_header_subexts ft_sub'>Promotions</p>

                    <p className='footer_header_subexts ft_sub'>Contact Us</p>

                </div>
                <div>
                    <p className='footer_header_texts'>TERMS & POLICIES</p>
                    <p className='footer_header_subexts '>Delivery service terms</p>

                    <p className='footer_header_subexts ft_sub'>Term of use</p>

                    <p className='footer_header_subexts ft_sub'>Privacy Policy</p>

                </div>
                <div>
                    <p className='footer_header_texts'>FOLLOW US</p>
                    <div className='flex mt-4'>
                        <img className='footer_icon' src='./fb.png' />
                        <p className='footer_header_subexts  ml-6'>Facebook</p>

                    </div>

                    <div className='flex mt-4'>
                        <img className='footer_icon' src='./insta.png' />

                        <p className='footer_header_subexts  ml-6'>Instagram</p>
                    </div>

                    <div className='flex mt-4'>
                        <img className='footer_icon' src='./tw.png' />

                        <p className='footer_header_subexts  ml-6'>Twitter</p>
                    </div>
                    <div className='flex mt-4'>
                        <img className='footer_icon' src='./li.png' />

                        <p className='footer_header_subexts  ml-6'>Linkedin</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
