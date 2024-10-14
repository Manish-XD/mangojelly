function Message({ msg, timestamp, sender}) 
{
    return (
        <div className={sender?'senderMsg message':'receiverMsg message'}>
            <p>{msg}</p>
            <span className={sender?'senderTimestamp timestamp':'receiverTimestamp timestamp'}>{timestamp.slice(12,17)}</span>
            
            <div className={sender?'senderLittleTriangle littleTriangle':'receiverLittleTriangle littleTriangle'}></div>
        </div>
    )
}

export default Message;