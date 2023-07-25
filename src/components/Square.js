const Square = (props) => {
    const handleClick = () => {
        console.log("Button Clicked ", props.value)
    }
    // console.log("PROPS", props.value)
    return (
        <button className="square" onClick={handleClick}>{props.value || 0 }</button>
    )
}

export default Square