import ResetButton from "./ResetButton"

const AnnounceWinner = (props) => {
    return (
        <div className={props.className}>
            <div className="announce-winner_box">
                <h3>{props.ntf}</h3>
                <div>{props.value}</div>
                <ResetButton onClick= {props.onClick}></ResetButton>
            </div>
        </div>
    )
}
export default AnnounceWinner