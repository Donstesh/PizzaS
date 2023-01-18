import Styles from "../../styles/Home.module.css"
import { motion } from 'framer-motion'
import Image from "next/image"
export default function Base({ toNext, updateBase }) {
    // Simple Structure to manage mapping 
    const baseData = [
        { name: "default" },
        { name: "Flatbread" },
        { name: "Thin Crust" },
        { name: "Sicilian Style" }]
    // Simple Structure to manage mapping
    const baseList = baseData.map(v => {
        return (
            <option key={v.name} value={v.name}>{v.name}</option>
        )
    })
    return (
        <motion.main animate={{ y: [1000, 0] }} transition={{duration: 10, type: "spring", damping: 3, ease: [0.075, 0.82, 0.165, 1] }}>
            <div className={Styles.child_one}>
                <h1>Choose your favorite Base </h1>
                <br />
                <small>select Base for pizza <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FF6D21" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                </svg> </small> <br />
                <select onChange={(e) => { updateBase(e.target.value); console.log(e.target.validationMessage) }} className={Styles.select} name="selectBase" id="selectBase">
                    {baseList}
                </select>
                <div>
                    <button onClick={() => { toNext(4); }}>Select Base</button>
                    <button onClick={() => { toNext(0) }}>GO Back</button>
                </div>
            </div>
            <div className={Styles.child_two} style={{ width: '100px', height: '100%', position: 'relative' }}>
                <Image src="/base.jpg" alt="basimages" layout="fill" className={Styles.imageComponent} />
            </div>
        </motion.main >
    )
}
