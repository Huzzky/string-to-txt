import Input from "../../Atoms/Textarea/Textarea";
import {useState} from "react";
import Link from "../../Atoms/Link/Link";
import './_FieldTxt.css'

const FieldTxt = () => {
    const [string, setString] = useState('');
    let site = 'data:text/plain;charset=utf-8,%EF%BB%BF' + encodeURIComponent(string)
    return (
        <form>
            <Input setStringFunc={setString}/>
            <Link data={{site}} downloadCheck={true}> Send</Link>


        </form>
    );
}

export default FieldTxt;