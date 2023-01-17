import Head from 'next/head'
import Styles from "../styles/Home.module.css"
import Header from './Comp/Header'
import Main from './Comp/Main'
import UpdateToppins from './Comp/Update.Toppin'
import UpdateChef from './Comp/doughchef'
import Base from './Comp/Base'
import { useState } from 'react'
import CartBox from './Comp/CartBox'
import { AnimatePresence } from 'framer-motion'
import CheakOrder from './Comp/CheakOrder'
export default function Index() {
  const [renderIndex, setRenderIndex] = useState(0)
  const [selectedChef, setSelectedChef] = useState([])
  const [selectedToppins, setSelectedToppins] = useState([])
  const [selectedBase, setSelectedBase] = useState("default")
  const [toggleCart, setToggleCart] = useState(false)
  return (
    <>
      <Head>
        {/* Simple SEO  */}
        <title>Pizza Website UI</title>
        <meta name="description" content="Pizza website UI Project create with the help of ReactJS ,NextJS ,Framer-Motion. " />
        <meta name="robots" content="noindex, nofollow" /> </Head>
      <div className={Styles.wrapper}>
        <div className={Styles.inner}>
          <Header setToggleCart={setToggleCart} toggleCart={toggleCart} />
          {renderIndex == 0 ? <Main toNext={setRenderIndex} /> : null}
          {renderIndex == 1 ? <UpdateChef toNext={setRenderIndex} updateToppins={setSelectedChef} /> : null}
          {renderIndex == 2 ? <UpdateToppins toNext={setRenderIndex} updateToppins={setSelectedToppins} /> : null}
          {renderIndex == 3 ? <Base toNext={setRenderIndex}
            updateBase={setSelectedBase} /> : null}
          {renderIndex == 4 ? <CheakOrder toNext={setRenderIndex}
            updateBase={setSelectedBase} selectedToppins={selectedToppins}
            selectedBase={selectedBase} /> : null}
        </div>
        <AnimatePresence>
          {toggleCart && <CartBox selectedToppins={selectedToppins}
            selectedBase={selectedBase} />}
        </AnimatePresence>
      </div >
    </>
  )
}
