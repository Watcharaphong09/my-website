
const Contact = () => {
    return (
        <div className="p-4 lg:p-20 flex flex-col items-center justify-center">
           <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Contact Me</h1>
                <form target="_blank" action="https://formsubmit.co/watchanygame@gmail.com" method="POST" className="flex flex-col gap-2 lg:w-1/2">
                    <div className="lg:flex gap-6">
                        <input className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Enter Your Name" type="text" name="name" required/>
                        <input className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Enter Your Email" type="email" name="email" required/>
                    </div>
                    <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500" placeholder="Write Your Massage..." name="message" cols="20" rows="10" required></textarea>
                    <button className="neon-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-10" type="submit">Submit</button>
                </form>
           </div>
    );
};

export default Contact;