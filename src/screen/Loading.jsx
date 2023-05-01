import logo from '../assets/image/logo-loading.svg'

function Loading(){
    return(
        <div className="min-h-screen bg-[#24272C]">
            {/* top line */}
      <div className="absolute w-full mt-8 px-14">
        <hr className="h-px border-0 bg-white mb-1" />
        <div className="flex justify-between">
        <p className="text-end text-white font-semibold">Hello World</p>
        <p className="text-end text-white font-semibold">Hello World</p>
        <p className="text-end text-white font-semibold">Hello World</p>
        </div>
      </div>
      {/* logo */}
      <div className='absolute top-0 bottom-24 left-11 right-0 flex justify-center items-center' id='thisone' style={{}}>
        <img src={logo} alt="" className='' />
      </div>
      {/* Bottom line */}
      <div className="absolute w-full mt-12 px-14 bottom-8">
        <p className="text-end text-white font-semibold mb-1">2023</p>
        <hr className="h-px border-0 bg-white" />
      </div>
        </div>
    );
}

export default Loading;