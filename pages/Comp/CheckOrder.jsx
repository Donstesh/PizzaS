import Styles from "../../styles/Home.module.css"
import { motion } from 'framer-motion'
import CartBox from "./CartBox"
export default function CheckOrder({ toNext, selectedBase, selectedToppins, selectedWaiter, selectedChef }) {
    return (
        <motion.main animate={{ y: [1000, 0] }} transition={{ duration: 5 ,type: "spring", damping: 3, ease: [0.075, 0.82, 0.165, 1] }} >
            <div className={Styles.child_one}>
                <h1> Order Complete <br /> NOW!</h1>
                <p>Just confirm your order and Deliver to Customer.</p>
                <div>
                    <button onClick={() => {
                        alert("Order Placed")
                    }}>Place Order</button>
                    <button onClick={() => { toNext(0) }}>Go back</button>
                </div>
            </div>
            <div className={Styles.child_two}>
                <CartBox position="relative" R="0" L="1rem" T="-0rem" selectedChef={selectedChef} selectedBase={selectedBase} selectedToppins={selectedToppins} selectedWaiter={selectedWaiter} />
            </div>
        </motion.main>
    )
}
