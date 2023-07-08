import React from 'react'


export default function Landingpage() {
  return (
    <div>
      <div className='landing_back grid md:grid-cols-2'>
        {/* TEXTS */}
        <div className='land_text_section'>
          <p className='land_hero_text'>Lasena The True Taste of  Nature</p>
          <p className='land_hero_sub_text'>The Levitating and Gushing Lasena Artesian Thermal Aquifer,Flowing 24/7 With Natural Hydrostatic Pressure</p>
          <button className='hero_cta'>
            BUY LASANA WATER
          </button>
        </div>

        {/* IMAGE */}
        <div>
          <img className='btoools' src='./water.png' />
        </div>


      </div>

      <div className='vb_sec div_marg grid md:grid-cols-2 grid-cols-1'>
        <div className='vibes'>
          <center>
            <p>OUR STORY</p>
          </center>
        </div>
        <div className='vb_div'>
          <p className='ab_las'>About Lasena</p>
          <p className='nar mt-2 mb-6'>Bringing Nature s Gift To Man</p>
          <p>We at Lasena are proud of the simple fact that each Lasena bottle is filled with Natural water gotten from a non-stop Thermal Aquifer that flows naturally upwards from the earth - Yes, you heard that right! It sounds almost too good to be true but the Lasena Aquifer really does flow upward against gravity from a depth of 522 meters with a 24/7 non stop supply of rich alkaline Natural water. This water now flows directly into the facility we have erected around this wonder of God and Nature. The story of Lasena is truly a story of good fortune, and a testament of Gods favour on Nigeria, and Africa as a whole.</p>
          <button className='learn_btn mt-6'>
            Learn more
          </button>
        </div>
      </div>

      <div className='mami mt-20'>
        <p className='health_div'>Health Benefits Of Lasena Water</p>
        <p className='health_sub'>By choosing our water, you can safeguard your wellbeing. Unlike still water, Lasena Artesian Natural Alkaline Mineral Water acts as the perfect solution to high body acidity, a contributing factor in some degenerative diseases. Experience excellent health and potentially lower your medical expenses. The choice is in your hands.</p>
        <p className='health_sub mt-6'>The Way Nature Intended, No Added Chemicals</p>
      </div>


      {/* BENEFIT DIV */}
      <div className='div_marg tp benefit_div grid md:grid-cols-2 grid-cols-1'>
        <div>
          <p className='add_benefit'>ADDED BENEFITS</p>
          <p className='benefit_head'>Here are some added benefits of Lasena water</p>
        </div>
        <div className='vextor_fiv'>
          <div className='flex justify-around '>
            {/* VECTORS */}
            <div className='mr-10'>
              <div className='blue_circle mb-6'>

              </div>
              <div className='lines'>

              </div>
            </div>
            {/* VECTOR TEXTS */}
            <div className='vector_text'>
              <p className='benef_top'>Counters body acidity</p>
              <p>Lasena water is beneficial for your health as it helps regulate and balance the body's acidity levels, promoting overall well-being.</p>
            </div>
          </div>
          <div className='flex justify-around mt-6 '>
            {/* VECTORS */}
            <div className='mr-10'>
              <div className='blue_circle mb-6'>

              </div>
              <div className='lines'>

              </div>
            </div>
            {/* VECTOR TEXTS */}
            <div className='vector_text'>
              <p className='benef_top'>Provides antioxidants</p>
              <p>Incorporating Lasena water into a healthy lifestyle can contribute to the overall antioxidant intake and potentially provide additional health benefits.</p>
            </div>
          </div>

          <div className='flex justify-around mt-6 '>
            {/* VECTORS */}
            <div className='mr-10'>
              <div className='blue_circle mb-6'>

              </div>
            </div>
            {/* VECTOR TEXTS */}
            <div className='vector_text'>
              <p className='benef_top'>Provides healthy minerals.</p>
              <p>Lasena water can be a part of a healthy lifestyle, complementing a well-rounded diet to ensure adequate mineral intake for optimal health.</p>
            </div>
          </div>
        </div>
      </div>


      <div className='mami mt-20'>
        <p className='global'>Global Standard Packaging</p>
        <p className='health_sub mb-6'>All our packaging materials are BPA free bottles.</p>
        <button className='shop_now'>
          <p>Shop Now</p>
        </button>
      </div>

    </div>
  )
}
