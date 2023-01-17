//-C
// Required Stuff
import Styles from "../../styles/Home.module.css"
import { motion } from 'framer-motion'
import CartBox from "./CartBox"
export default function CheakOrder({ toNext, selectedBase, selectedToppins }) {
    return (
        <motion.main animate={{ y: [1000, 0] }} transition={{ type: "spring", damping: 3, ease: [0.075, 0.82, 0.165, 1] }} >
            <div className={Styles.child_one}>
                <h1>Check Order <br /> NOW!</h1>
                <p>Just confirm your order and enjoy our delicious fastest delivery.</p>
                <div>
                    <button onClick={() => {
                        alert("Order Placed")
                    }}>Place Order</button>
                    <button onClick={() => { toNext(2) }}>Go back</button>
                </div>
            </div>
            <div className={Styles.child_two}>
                <CartBox position="relative" R="0" L="1rem" T="-0rem" selectedBase={selectedBase} selectedToppins={selectedToppins} />
            </div>
        </motion.main>
    )
}
