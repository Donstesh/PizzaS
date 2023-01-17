// -C
// Required stuff
import Styles from "../../styles/Home.module.css"
import { motion } from 'framer-motion'
import { useState } from 'react'
export default function UpdateChef({ toNext, UpdateChef }) {
    // Simple Code Base 
    const ChefData = [{
        name: "chef-1",
        id: "chef-1",
        wrapperId: "wrapper-1"
    }, {
        name: "chef-2",
        id: "chef-2",
        wrapperId: "wrapper-2"
    }]
    // Toppins State which is user selected toppins 
    const [chefs, addChef] = useState([])
    // State of showing alert while user dont select toppins and switch place
    const [showAleart, setShowAleart] = useState(false)
    // Mapping Button to select toppins
    const addChefButtonList = ChefData.map((v, i) => {
        return (
            <motion.button whileTap={{ opacity: [1, .5, 1] }} key={v.name} className={Styles.ToppinsButton} onClick={() => { addChef([...chefs, v.name]); setShowAleart(false) }
            }>{v.name}</motion.button>
        )
    })
    // Mapping Button to remove toppins and show selected toppins
    const addedChefButtonList = [...new Set(chefs)].map((v, i) => {
        return (
            <motion.li animate={{ y: [-10, 0] }} key={v} className={Styles.listedItems}><h3>{v}</h3> <button onClick={() => {
                const RetriveData = chefs.filter((value, index) => {
                    return value !== v
                })
                addChef(RetriveData)
            }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg></button></motion.li >
        )
    })
    return (
        <motion.main animate={{ y: [1000, 0] }} transition={{ type: "spring", damping: 3, ease: [0.075, 0.82, 0.165, 1] }}>
            <div className={Styles.child_one}>
                <h1>Chef Selection</h1> <br />
                <small>select Chef for pizza Toppings <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF6D21" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg> </small>
                {addChefButtonList}
                <br /> <br />
                <div>
                    <button onClick={() => {
                        if (chefs.length > 0) {
                            toNext(2);
                            UpdateChef(chefs)
                        } else {
                            setShowAleart(true)
                        }
                    }}>Select Chef</button>
                    <button onClick={() => { toNext(0) }}>Go back</button>
                </div>
            </div>
            <div className={Styles.child_two}>
                {showAleart && <h5>! Please Select atleast one Chef</h5>}
                <ul>
                    {addedChefButtonList}
                </ul>

                {chefs.length == 0 && <h1 className={Styles.add}>+</h1>}
            </div>
        </motion.main >
    )
}