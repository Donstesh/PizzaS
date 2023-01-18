import Head from 'next/head'
import Styles from "../styles/Home.module.css"
import Header from './Comp/Header'
import Main from './Comp/Main'
import UpdateToppins from './Comp/Updatetoppin'
import UpdateChef from './Comp/Doughchef'
import UpdateWaiter from './Comp/Waiter'
import Base from './Comp/Base'
import { useState } from 'react'
import CartBox from './Comp/CartBox'
import { AnimatePresence } from 'framer-motion'
import CheckOrder from './Comp/CheckOrder'
export default function Index() {
  const [renderIndex, setRenderIndex] = useState(0)
  const [selectedChef, setSelectedChef] = useState([])
  const [selectedToppins, setSelectedToppins] = useState([])
  const [selectedBase, setSelectedBase] = useState("default")
  const [selectedWaiter, setSelectedWaiter] = useState([])
  const [toggleCart, setToggleCart] = useState(false)
  return (
    <>
      <Head>
        {/* Simple SEO  */}
        <title>PizzaS</title>
        <meta name="description" content="PizzaS Project created with the help of ReactJS ,NextJS ,Framer-Motion. " />
        <meta name="robots" content="noindex, nofollow" /> </Head>
      <div className={Styles.wrapper}>
        <div className={Styles.inner}>
          <Header setToggleCart={setToggleCart} toggleCart={toggleCart} />
          {renderIndex == 0 ? <Main toNext={setRenderIndex} /> : null}
          {renderIndex == 1 ? <UpdateChef toNext={setRenderIndex} UpdateChef={setSelectedChef} /> : null}
          {renderIndex == 2 ? <UpdateToppins toNext={setRenderIndex} updateToppins={setSelectedToppins} /> : null}
          {renderIndex == 3 ? <Base toNext={setRenderIndex} updateBase={setSelectedBase} /> : null}
          {renderIndex == 4 ? <UpdateWaiter toNext={setRenderIndex} UpdateWaiter={setSelectedWaiter} /> : null}
          {renderIndex == 5 ? <CheckOrder toNext={setRenderIndex} updateBase={setSelectedBase} selectedChef={selectedChef} selectedToppins={selectedToppins} selectedBase={selectedBase} selectedWaiter={selectedWaiter} /> : null}
        </div>
        <AnimatePresence>
          {toggleCart && <CartBox selectedChef={selectedChef} selectedToppins={selectedToppins} selectedBase={selectedBase} selectedWaiter={selectedWaiter}  />}
        </AnimatePresence>
      </div >
    </>
  )
}
