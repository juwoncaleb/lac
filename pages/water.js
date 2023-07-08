import React, { useState } from 'react'

export default function Water() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <div className='scene'>
                <center>
                    <div className='scene_div'>
                        <p className='lacc_head'>Lasena Artesian Natural <br /> Alkaline Mineral Water</p>
                        <p className='lakaka'>
                            Indulge in the all-natural goodness of Lasena Artesian Natural Alkaline Mineral Water. Sourced from a 24/7 gushing thermal Aquifer nestled in the heart of Isheri North, this water boasts a pH level of 7.78, making it perfectly balanced.
                        </p>
                    </div>
                </center>
            </div>
            <div className='mami '>
                <p className='health_div'>Meticulous Gift Of Nature</p>
                <p className='health_sub'>Our water undergoes a meticulous journey to ensure its purity and mineral content. It is filtered and enriched by years of rock filtration, as it seeps into an underwater Aquifer. Utilizing a Thermal Hydrostatic Pump, the water is then brought back up, maintaining a temperature of 70 degrees, effectively eliminating any microbes and ensuring complete purity and natural sterility.</p>
            </div>
            <div className='river '>
                <p className='health_div'>Experience Nature Now</p>
                <p className='health_sub'>Experience the epitome of natural and healthy water with Lasena Artesian Natural Alkaline Mineral Water. Immerse yourself in the refreshing taste and pristine quality that only nature can provide. </p>
                <center>
                    <button className='hero_cta'>
                        BUY LASANA WATER
                    </button>
                </center>
            </div>
            <div className='river '>
                <p className='health_div mb-12'>What iss In My Lasena? (mg/Liter)
                </p>
                <div>
                    <div className='grid md:grid-cols-5 grid-cols-3'>
                        <div className='minerial'>
                            PH 7.78
                        </div>
                        <div className='minerial'>
                            Copper - 0.02
                        </div>
                        <div className='minerial'>
                            Choloride - 28.50
                        </div>
                        <div className='minerial'>
                            sulphate - 19.70
                        </div>
                        <div className='minerial'>
                            Nitrate - 0.9z
                        </div>
                        <div className='minerial'>
                            Soduim - 8.50
                        </div>
                        <div className='minerial'>
                            floride - 1.00
                        </div>
                        <div className='minerial'>
                            Potassium - 100
                        </div>
                        <div className='minerial'>
                            Toytal Dissolved solid - 335.0
                        </div>
                        <div className='minerial'>
                            Bicarbontate
                        </div>
                        <div className='minerial'>
                            Calcuim
                        </div>
                        <div className='minerial'>
                            maginisuim
                        </div>
                        <div className='minerial'>
                            Silica 17.80
                        </div>
                        <div className='minerial'>
                            Zinc -0.3
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
