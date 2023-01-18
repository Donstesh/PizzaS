
import Styles from "../../styles/Home.module.css"
import { motion } from 'framer-motion'
import { useState } from 'react'
export default function UpdateWaiter({ toNext, UpdateWaiter }) {

    const WaiterData = [{
        name: "Waiter 1",
        id: "waiter-1",
        wrapperId: "wrapper-1"
    }, {
        name: "Waiter 2",
        id: "waiter-2",
        wrapperId: "wrapper-2"
    }]

    const [waiters, addWaiter] = useState([])

    const [showAleart, setShowAleart] = useState(false)

    const addWaiterButtonList = WaiterData.map((v, i) => {
        return (
            <motion.button whileTap={{ opacity: [1, .5, 1] }} key={v.name} className={Styles.ToppinsButton} onClick={() => { addWaiter([...waiters, v.name]); setShowAleart(false) }
            }>{v.name}</motion.button>
        )
    })
 
    const addedWaiterButtonList = [...new Set(waiters)].map((v, i) => {
        return (
            <motion.li animate={{ y: [-10, 0] }} key={v} className={Styles.listedItems}><h3>{v}</h3> <button onClick={() => {
                const RetriveData = waiters.filter((value, index) => {
                    return value !== v
                })
                addWaiter(RetriveData)
            }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg></button></motion.li >
        )
    })
    return (
        <motion.main animate={{ y: [1000, 0] }} transition={{duration: 5, type: "spring", damping: 3, ease: [0.075, 0.82, 0.165, 1] }}>
            <div className={Styles.child_one}>
                <h1>Waiter Selection</h1> <br />
                <small>select a Waiter for pizza Delizery <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF6D21" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg> </small>
                {addWaiterButtonList}
                <br /> <br />
                <div>
                    <button onClick={() => {
                        if (waiters.length > 0) {
                            toNext(5);
                            UpdateWaiter(waiters)
                        } else {
                            setShowAleart(true)
                        }
                    }}>Select Waiter</button>
                    <button onClick={() => { toNext(0) }}>Go back</button>
                </div>
            </div>
            <div className={Styles.child_two}>
                {showAleart && <h5>! Please Select one Waiter to Deliver the Order</h5>}
                <ul>
                    {addedWaiterButtonList}
                </ul>

                {waiters.length == 0 && <h1 className={Styles.add}>+</h1>}
            </div>
        </motion.main >
    )
}