interface Props {
  className?: string;
  status: string
  isWinner?: boolean
  onClick: () => void
}

const Square = (props: Props) => {
  return (
    <div className={`border border-gray-400 w-[100px] h-[100px] hover:cursor-pointer flex items-center justify-center text-4xl ${props.isWinner ? 'bg-red' : ''}`} onClick={() => props.onClick()}>
      { props.status }
    </div>
  )
}

export default Square;
