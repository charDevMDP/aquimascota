
interface Props {
  title: string;
  subtitle?: string;
  className?: string
}

const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={ `mt-3 mx-5  ${ className }`}>
      <h1 className={ `antialiased font-semibold `}> { title } </h1>
      <div className="w-full md:w-48 flex-grow h-[2px] bg-gradient-to-r from-adopColor b"></div>

      <div>
      { subtitle && (
        <h3 className='mt-[6px] text-xs mb-2'> { subtitle} </h3>
      )}
      </div>
    </div>
  )
}

export default Title