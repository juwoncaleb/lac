import React from 'react'

export default function About() {
    return (
        <div>
            <div className='scene'>
                <center>
                    <div className='scene_div'>
                        <p className='lacc_head'>THE BRAND: LASENA</p>
                        <p className='lakaka'>
                            The only artesian natural alkaline mineral water brand, sourced from a flowing and renewable artesian thermal aquifer, connecting nature's gift to man.
                        </p>
                    </div>
                </center>
            </div>
            <div className='vb_sec div_marg grid gap-8 md:grid-cols-2 grid-cols-1'>
                <img src='./tap.png' />
                <div className='vb_div'>
                    <p className=' text-3xl font-meduim'>Our Mission</p>
                    <p className=' mt-2 mb-6'>The enhancement of public health by delivering an Artesian Alkaline Mineral Water offering provided by nature and fortunately perfect for consumption by man. We intend to connect Lasena Artesian Natural Alkaline Mineral Water to a global audience seeking for a richer experience of wellness, life, and water.</p>

                </div>
            </div>

            <div className='vb_sec div_marg grid gap-8 md:grid-cols-2 grid-cols-1'>
                <div className='vb_div'>
                    <p className=' text-3xl font-meduim'>Our Vision</p>
                    <p className=' mt-2 mb-6'>Building a globally acceptable health and wellness corporation through the implementation of world best practices, an ecologically sound brand ideology, and a consumer first approach that places the benefits and the value-added offerings at the forefront of all our deployed activities, initiatives, and communications.</p>

                </div>
                <img className='mb-8' src='./well.png' />

            </div>
            <div className='river grid md:grid-cols-3 gap-10 grid-cols-1'>
                <div className='core_value_div'>
                    <p className='core_head'>Tenacity</p>
                    <p className='mb-10'>We are committed to delivering quality products to our customers, no matter what it takes.</p>
                    <img className='ml-auto arro' src='./ar.png' />
                </div>
                <div className='core_value_div'>
                    <p className='core_head'>Openness</p>
                    <p className='mb-10'>Absolute integrity is our watch word.</p>
                    <img className='ml-auto arro' src='./ar.png' />
                </div>
                <div className='core_value_div'>
                    <p className='core_head'>Timeliness</p>
                    <p className='mb-10'>We deal with our customers at their convenience and we go the extra mile to exceed expectations.</p>
                    <img className='ml-auto arro' src='./ar.png' />
                </div>
                <div className='core_value_div'>
                    <p className='core_head'>Forward Thinking</p>
                    <p className='mb-10'>We strive to always be ahead of our competition at all times in terms of innovation, health and medical marketing.</p>
                    <img className='ml-auto arro' src='./ar.png' />
                </div>
                <div className='core_value_div'>
                    <p className='core_head'>Accountability</p>
                    <p className='mb-10'>We take full responsibility for our actions.
                        Every Great Venture, Along with Its Benefits, Must Be Built On a Solid Bedrock</p>
                    <img className='ml-auto arro' src='./ar.png' />
                </div>
            </div>
        </div>
    )
}
