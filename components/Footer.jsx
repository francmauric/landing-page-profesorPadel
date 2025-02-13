
import { motion } from "framer-motion";


const Footer = () => {
    const footerAnimation = {
        hidden:{
            y:100,
        },
        show:{
            y:0,
            transition:{
                delay:3.9,
                duration:0.5,
            }
        }
    }
    return(
        <motion.footer className="flex justify-center">
            <ul className="w-[300px] flex justify-between items-center "
            variants={footerAnimation} initial="hidden" animate="show">
                <li><a href="#" className="text-sm font-semibold">Instagram</a></li>
                <li><a href="#" className="text-sm font-semibold">Snapchat</a></li>
                <li><a href="#" className="text-sm font-semibold">Dribble</a></li>
            </ul>
        </motion.footer>
    )
}

export default Footer;