import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div>
                    <p className="text-gray-500">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "What Is Lasena Artesian Natural Alkaline Mineral Water?",
            a: "Lasena Artesian Natural Alkaline Mineral Water is an ALL NATURAL water offering with a PH of 7.78 gotten directly from a 24/7 gushing thermal Aquifer Located in the heart of Isheri North. It is pure water filtered and minerally enriched by years of rock filtration into an underwater Aquifer which is pumped back upwards through a Thermal Hydrostatic Pump which is then collected by us at a degree of 70 degrees, ensuring there are no microbes and it is completely pure and naturally sterile. What more natural and healthy experience of water could there be?"

        }
        ,
        {
            q: "Is Lasena Artesian Natural Alkaline Mineral Water a drug??",
            a: "Lasena Artesian Natural Alkaline Mineral Water is an ALL NATURAL water offering with a PH of 7.78 gotten directly from a 24/7 gushing thermal Aquifer Located in the heart of Isheri North. It is pure water filtered and minerally enriched by years of rock filtration into an underwater Aquifer which is pumped back upwards through a Thermal Hydrostatic Pump which is then collected by us at a degree of 70 degrees, ensuring there are no microbes and it is completely pure and naturally sterile. What more natural and healthy experience of water could there be?"

        },
        {
            q: "Is Lasena Artesian Natural Alkaline Mineral Water Safe for everyone?",
            a: "Lasena Artesian Natural Alkaline Mineral Water is an ALL NATURAL water offering with a PH of 7.78 gotten directly from a 24/7 gushing thermal Aquifer Located in the heart of Isheri North. It is pure water filtered and minerally enriched by years of rock filtration into an underwater Aquifer which is pumped back upwards through a Thermal Hydrostatic Pump which is then collected by us at a degree of 70 degrees, ensuring there are no microbes and it is completely pure and naturally sterile. What more natural and healthy experience of water could there be?"

        },
        {
            q: "Is Lasena Artesian Natural Alkaline Mineral Water Safe for everyone?",
            a: "Lasena Artesian Natural Alkaline Mineral Water is an ALL NATURAL water offering with a PH of 7.78 gotten directly from a 24/7 gushing thermal Aquifer Located in the heart of Isheri North. It is pure water filtered and minerally enriched by years of rock filtration into an underwater Aquifer which is pumped back upwards through a Thermal Hydrostatic Pump which is then collected by us at a degree of 70 degrees, ensuring there are no microbes and it is completely pure and naturally sterile. What more natural and healthy experience of water could there be?"

        },
        {
            q: "What Is Lasena Artesian Natural Alkaline Mineral Water?",
            a: "Lasena Artesian Natural Alkaline Mineral Water is an ALL NATURAL water offering with a PH of 7.78 gotten directly from a 24/7 gushing thermal Aquifer Located in the heart of Isheri North. It is pure water filtered and minerally enriched by years of rock filtration into an underwater Aquifer which is pumped back upwards through a Thermal Hydrostatic Pump which is then collected by us at a degree of 70 degrees, ensuring there are no microbes and it is completely pure and naturally sterile. What more natural and healthy experience of water could there be?"


        },
        {
            q: "What Is Lasena Artesian Natural Alkaline Mineral Water?",
            a: "Lasena Artesian Natural Alkaline Mineral Water is an ALL NATURAL water offering with a PH of 7.78 gotten directly from a 24/7 gushing thermal Aquifer Located in the heart of Isheri North. It is pure water filtered and minerally enriched by years of rock filtration into an underwater Aquifer which is pumped back upwards through a Thermal Hydrostatic Pump which is then collected by us at a degree of 70 degrees, ensuring there are no microbes and it is completely pure and naturally sterile. What more natural and healthy experience of water could there be?"

        }
    ]

    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}