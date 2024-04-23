
const TypePost = (type:any) => {

    let typefinal;

    switch (type.type) {
      case "lost":
        typefinal = <div className='flex items-center justify-center bg-red-500 rounded-sm text-center w-[90%] mx-auto'>
        <span className="uppercase text-[10px] text-white">LO PERDI</span>
        </div>
        break;
      case "found":
        typefinal = <div className='flex items-center justify-center bg-green-500 rounded-sm text-center w-[90%] mx-auto'>
        <span className="uppercase text-[10px] text-white">LO ENCONTRE</span>
        </div>
        break;
    }
    return (
      <>{typefinal}</>
      )
}



export default TypePost