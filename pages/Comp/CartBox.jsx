import classes from "../../styles/CartBox.module.css"
import { motion } from 'framer-motion'
export default function CartBox({ selectedChef, selectedToppins, selectedBase, selectedWaiter,  position, L, R, B, T }) {
    // Remove Duplicate 
    const filteredToppins = [...new Set(selectedToppins)]

    const tpList = filteredToppins.map(v => {
        return (<li key={v}>{v}</li>)
    })

    return (<motion.div style={{ height: 0 }}
        animate={
            {
                height: 350,
                position: position,
                left: L,
                right: R,
                top: T,
                bottom: B,
            }
        }
        exit={{ height: 0 }} transition={{ duration: .3 }}
        className={classes.wrapper}>
        <h3>Order Cart</h3> <h4>Waiting Time 5 Seconds</h4>
        <div>
            <h4>Chef - </h4>
            <p> {selectedChef} </p>
        </div>
        <div>
            <h4>Toppins -</h4>
            <ul> {tpList} </ul>
        </div>
        <div>
            <h4>Base - </h4>
            <p>{selectedBase}</p>
        </div>
        <div>
            <h4>Waiter - </h4>
            <p>{selectedWaiter}</p>
        </div>
    </motion.div>

    )
}
