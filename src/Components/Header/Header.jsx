import './_Header.css'
import {memo} from "react";

const Header = memo(function Header() {
    return (
        <header className={"header"}>
            <p className={"header__p"}>Your string to .txt</p>
        </header>
    );
})

export default Header;
