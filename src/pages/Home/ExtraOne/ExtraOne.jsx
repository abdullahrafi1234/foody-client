import { Typewriter } from 'react-simple-typewriter'

const ExtraOne = () => {
    return (
        <div className='my-12 mb-28 '>

            <div className="text-4xl mt-24 p-18 text-stone-700 text-center font-bold">
                <Typewriter
                    words={['Frequently Asked Questions']}
                    loop={true}
                    cursor
                    cursorStyle='.'
                    typeSpeed={350}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </div>

            {/* <div className='p-10'>
                <h1 className='text-center text-rose-950 mt-10 text-5xl font-semibold'>Frequently Asked Questions</h1>
            </div> */}
            <div className='lg:flex-row md:flex-col-reverse mt-8 flex flex-col-reverse  gap-8 justify-between '>

                {/* faq  */}
                <div className="join join-vertical lg:w-1/2 px-10 lg:mt-0 md:mt-72 mt-32 ">

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title font-bold">
                            How do I substitute ingredients in a recipe?
                        </div>
                        <div className="collapse-content">
                            <p>Many people have dietary restrictions or preferences that require them to substitute certain ingredients in recipes. Providing guidance on ingredient substitutions helps users adapt recipes to their needs.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-bold ">
                            What are some cooking tips for beginners?
                        </div>
                        <div className="collapse-content">
                            <p>Beginners often seek advice on basic cooking techniques, kitchen equipment essentials, and simple recipes to start with. Offering tips and tricks tailored to novices can be incredibly helpful.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-bold">
                            How can I store food properly to maintain freshness?
                        </div>
                        <div className="collapse-content">
                            <p>Proper food storage is crucial for preserving freshness and preventing waste. FAQs about storing perishable and non-perishable items, as well as best practices for storing leftovers, can assist users in minimizing food spoilage.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-bold">
                            Are there any recommended meal planning strategies?
                        </div>
                        <div className="collapse-content">
                            <p>Meal planning can save time and money while promoting healthier eating habits. Providing guidance on meal prep, batch cooking, and creating balanced meal plans can assist users in streamlining their cooking routines. </p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-bold">
                            <a className="">What are some healthy substitutes for common ingredients?</a>

                        </div>
                        <div className="collapse-content">
                            <p> Many individuals are interested in healthier eating options and seek alternatives to common ingredients like sugar, flour, or cooking oils. Offering suggestions for nutritious substitutes can help users make healthier choices in their cooking.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title font-bold">
                            How do I adjust recipes for dietary restrictions or allergies?
                        </div>
                        <div className="collapse-content">
                            <p>Individuals with dietary restrictions or allergies often need to modify recipes to accommodate their needs. FAQs on adapting recipes for gluten-free, dairy-free, vegan, or other dietary preferences can assist users in finding suitable alternatives.</p>
                        </div>

                    </div>

                    <div className=' pt-8'> 
                        <button className='btn btn-success text-white'>Explore More</button>
                    </div>
                </div>

                {/* /img */}
                <div className='flex gap-4 lg:w-1/2 w-full lg:p-0 md:p-12 p-8 h-[300px]'>
                    <img className='lg:h-[570px] md:h-[530px] h-[400px] rounded-xl w-1/2' src="faq1.jpeg" alt="" />
                    <img className='lg:h-[570px] md:h-[530px] h-[400px] rounded-xl w-1/2' src="faq2.jpeg" alt="" />
                </div>



            </div>

        </div>
    );
};

export default ExtraOne;