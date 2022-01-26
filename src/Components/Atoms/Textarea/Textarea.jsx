const Textarea = (funcSetText) => {
    return (
        <textarea data-testid="string-input" onChange={(e) => {
            funcSetText.setStringFunc(e.currentTarget.value)
        }} placeholder={"Ваш текст сюда писать..."}/>
    );
}

export default Textarea;