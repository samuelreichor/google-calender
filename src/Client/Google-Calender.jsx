import "./Google-Calender.css"

const Calender = () => {
    return (
        <section id="calender">
            <div className="bg-slate-50 dark:bg-slate-700 p-4 md:p-6 lg:p-8 min-h-screen grid gap-4 md:gap-6 lg:gap-8 text-slate-600 dark:text-slate-100 grid-rows-auto1">
            <header className="text-center grid p-4 place-items-center content-center">
      <h1 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br pb-4 md:pb-6 from-blue-500 to-violet-700 dark:from-blue-400">My Calender Events</h1>
      <label htmlFor="eventAmt">Events to Show</label>
      <input type="range" id="eventAmt" min="1" value="9" max="20" className="accent-blue-600 cursor-grab"/>
    </header>
    <main className="max-w-6xl w-full mx-auto">
      <section className="grid gap-4 md:gap-6 lg:gap-8 items-start grid-cols-cards" id="events-container">
        <article className="bg-white dark:bg-slate-800 shadow-xl shadow-slate-200 dark:shadow-slate-800 rounded-lg">
          <div className="p-3 shadow bg-indigo-500 text-indigo-50 uppercase grid place-items-center rounded-t-lg">
            <div className="text-sm">Feb</div>
            <div className="text-3xl font-bold">3</div>
          </div>
          <div className="p-4 md:p-6 lg:p-8 grid gap-4 md:gap-6">
            <div className="grid gap-1">
              <p className="text-slate-400 text-sm">Feb 13–Feb 16</p>
              <h2 className="font-bold text-2xl">
                <a href="#">Really Cool Event</a>
              </h2>
              <div className="grid gap-1">
                <button className="text-slate-400 flex gap-1 items-center cursor-pointer" aria-expanded="false" aria-controls="details-1" id="btn-1">
                  <p className="pointer-events-none">See details</p>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 pointer-events-none transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="grid gap-1" id="details-1" aria-labelledby="btn-1">
                  <p className="text-slate-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum nemo reiciendis maxime. Fugiat, officiis? Officiis necessitatibus nulla veniam fugiat consectetur, porro cumque dolor, eligendi amet, quidem non inventore hic omnis? Id obcaecati, quibusdam maxime nulla illum consectetur libero soluta atque quasi, ad veniam laudantium. Laborum nisi soluta nostrum maiores.</p>
                </div>
              </div>
            </div>
            <a href="#" className="bg-indigo-500 rounded-md px-4 py-2 text-indigo-50 shadow-2xl shadow-indigo-200 dark:shadow-none text-center font-bold hover:shadow-none ring ring-offset-0 ring-indigo-500 focus:outline-none focus:ring-offset-2">View Event</a>
          </div>
        </article>
        
      </section>
    </main>
            </div>
        </section>
    )
}

export default Calender;