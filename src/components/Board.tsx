const Board = (props: React.PropsWithChildren) => {
  return (
    <div className="board-wrapper w-[372px] h-[372px] p-4 border m-auto mt-10">
      <div className="board grid grid-cols-3 w-[336px] h-[336px] gap-4">
        {props.children}
      </div>
    </div>
  )
}

export default Board;
