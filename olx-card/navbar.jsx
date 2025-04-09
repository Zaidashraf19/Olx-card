const Navbar = () => {
    return(
        <> 
        <div className="flex my-2 mx-30">
        <h1 className="text-[#002f34] text-2xl font-extrabold">
          <span className="text-3xl">O</span>
          <span className="text-4xl">l</span>
          <span className="text-2xl">x</span>
        </h1>
        <span><i class="fa-solid fa-car"></i> Motors</span>
              <span><i class="fa-solid fa-building"></i> Properties</span>
        </div>
        <div className="mx- flex justify-center flex-wrap gap-5 mx-15">
          <p className="flex justify-between border rounded w-40 p-1">
            <span><i class="fa-solid fa-location-dot"></i> Pakistan</span>
            <span><i class="fa-solid fa-angle-down"></i></span>
          </p>
          <span className="flex justify-between border rounded">
            <input className="p-1 w-100" type="text" placeholder=" Find Cars, Mobiles Phones and more..           " />
            <span className="bg-[#000005] p-1 text-white"><i class="fa-solid fa-magnifying-glass"></i></span>
          </span>
          <a href="" className="underline underline-offset-8 decoration-[#002f34] p-1 text-[#002f34] text-xl font-bold hover:no-underline">Login</a>
        </div> <br />
        <div className="flex justify-center gap-5">
          <span className="font-bold cursor-pointer">ALL CATEGORIES <i class="fa-solid fa-angle-down"></i></span>
          <span className="cursor-pointer hover:text-green-400">Mobile Phones</span>
          <span className="cursor-pointer hover:text-green-400">Cars</span>
          <span className="cursor-pointer hover:text-green-400">Motorcycles</span>
          <span className="cursor-pointer hover:text-green-400">Houses</span>
          <span className="cursor-pointer hover:text-green-400">Video-Audios</span>
          <span className="cursor-pointer hover:text-green-400">Tablets</span>
          <span className="cursor-pointer hover:text-green-400">Lands & Plots</span>
        </div>
        <hr />
      <div className="m-5">
        <img className="rounded" src="https:/images.olx.com.pk/thumbnails/527654309-800x600.webp" alt="ADD" />
      </div>
      <div></div>
        </>
    )
}

export default Navbar