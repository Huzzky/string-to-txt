import './_Footer.css'
import Link from "../Atoms/Link/Link";
import {dataLinks} from "../../config";
import Img from "../Atoms/ImgComponent/Img";
import {memo} from "react";


const Footer = memo(function Footer() {
    return (
        <footer>
            <Link data={dataLinks.github}>
                <Img data={dataLinks.github} className={""}/>
            </Link>
        </footer>
    );
})

export default Footer;
