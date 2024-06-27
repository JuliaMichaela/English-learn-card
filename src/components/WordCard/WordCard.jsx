import './WordCard.css'

export default function WordCard() {
    return (
        <div className="card animation">
            <div className="word">{props.engVersion}</div>
            <div className="transcription">{props.transcription}</div>
            <button className={isVisible ? "btnVisible word" : "btnTranslate"} disabled={isVisible} onClick={handleShow} >
                {/* {isVisible ? props.rusVersion : "Проверить"} */}
            </button>
        </div >
    )
}
