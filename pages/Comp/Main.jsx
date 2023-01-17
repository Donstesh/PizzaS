// -C
// Reqiured stuff
import Styles from "../../styles/Home.module.css"
import { motion } from 'framer-motion'
import Image from "next/image"
export default function Inner({ toNext }) {
    return (
        <motion.main animate={{ y: [1000, 0] }} transition={{ type: "spring", damping: 3, ease: [0.075, 0.82, 0.165, 1] }} >
            <div className={Styles.child_one}>
                <small>easy way to order your food <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF6D21" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg></small>
                <h1>Choosing Healthy and Freshy Food</h1>
                <p>Just confirm your order and enjoy our delicious fastest delivery.</p>
                <div>
                    <motion.button animate={{ scale: [.9, 1, .9] }} transition={{ repeat : Infinity}} onClick={() => {
                        toNext(1)
                    }}>Create Pizza</motion.button>
                </div>
            </div>
            <div className={Styles.child_two} style={{ width: '100px', height: '100%', position: 'relative' }}>
                <Image src="/pizza.jpg" alt="basimages" layout="fill" className={Styles.imageComponent} />
            </div>
        </motion.main >
    )
}
