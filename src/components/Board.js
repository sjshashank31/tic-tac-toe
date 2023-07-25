import Square from "./Square";

const Board = () => {

    return (
        <>
            <div className="board-row">
                <Square value={"1"} />
                <Square value={"2"} />
                <Square value={"3"} />
            </div>

            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>

            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            
        </>

    )
}

export default Board