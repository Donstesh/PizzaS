// -C 
// Required Stuff
import classes from "../../styles/CartBox.module.css"
import { motion } from 'framer-motion'
export default function CartBox({ selectedToppins, selectedBase, position, L, R, B, T }) {
    // Remove Duplicate 
    const filteredToppins = [...new Set(selectedToppins)]
    // mapping toppins list 
    const tpList = filteredToppins.map(v => {
        return (<li key={v}>{v}</li>)
    })
    return (<motion.div style={{ height: 0 }}
        animate={
            {
                height: 300,
                position: position,
                left: L,
                right: R,
                top: T,
                bottom: B,
            }
        }
        exit={{ height: 0 }} transition={{ duration: .3 }}
        className={classes.wrapper}>
        <h3>Shopping Cart</h3>
        <div>
            <h4>Toppins -</h4>
            <ul> {tpList} </ul>
        </div>
        <div>
            <h4>Base - </h4>
            <p>{selectedBase}</p>
        </div>
    </motion.div>

    )
}
