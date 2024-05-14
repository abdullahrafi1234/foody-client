

const ExtraTwo = () => {
    return (
        <div className="shadow-lg mb-16 rounded-lg bg-blue-100">
            <div className='justify-between grid lg:grid-cols-2 grid-cols-1  lg:p-20 p-12 border-spacing-2'>
                <div>
                    <h1 className='text-4xl font-bold mb-5 text-blue-500'>Subscribe to Newsletter</h1>
                    <h2 className='text-xl  mt-5 mb-5'>Provide your email to get email notification when we launch new food  and publish new offer.
                    </h2>
                </div>
                <div>
                    <div className="join mt-10 lg:p-5">
                        <input className="input rounded-full input-bordered join-item" placeholder="Enter Your Email" />
                        <button className="text-white btn bg-red-500 join-item rounded-r-full ">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraTwo;