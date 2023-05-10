import React, { useEffect, useState } from "react";
import logo from "@/assets/icons/logo.svg";
import testing from "@/assets/images/burgerClassic.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { NextRouter, useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { decreaseItem, increaseItem, removeItem } from "slices/slices";
import { useSpring, animated, useTransition } from "@react-spring/web";
// import { useSpring } from "@react-spring/web";

const Header  = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [test, setTest] = useState<boolean>(false)
  const [card, setCard] = useState<boolean>(false)
  const router : NextRouter = useRouter();
  const dispatch = useDispatch()

  const down = useSpring({
    y : showNav ? 80 : -700,
    config : {
      duration : 100
    },
  })

  const right = useSpring({
    x : card ? 0 : 800,
  })


  const cart = useSelector((state : RootState) => state.slices.cartItem)
  const totalItem = useSelector((state : RootState) => state.slices.cartTotalQuantity)
  const totalAmount= useSelector((state : RootState) => state.slices.cartTotalAmount)

  useEffect(()=>{
    if(cart.length > 0){
      setTest(true)
    } else {
      setTest(false)
    }
  },[cart])


  return (
    <>
    {
      card && <div className="bg-black/40 w-screen h-screen fixed z-50"></div>
    }
      <header className="fixed bg-white w-full flex justify-between h-20 px-5 md:px-36 md:py-14 items-center z-40">
        <div className="w-full z-50 bg-white flex justify-between h-full items-center">
          <div>
            <Image src={logo} alt="logo" className="w-10 md:w-12"/>
          </div>
          <div className=" text-black flex space-x-5 relative">
            <div className="hidden mr-9 md:flex gap-8 text-muted">
          {[{name : "Home", path : '/'}, {name : "Order", path : '/order'}, {name : "Company", path : '/company'}, {name : "FAQ", path : '/faq'}]?.map((item, idx) => (
              <>
                <p className="py-5 pl-5">
                  <Link
                    onClick={()=> setShowNav(false)}
                    href={item.path}
                    className={`
                    ${router.pathname === item.path && 'text-primary'}
                    `}
                  >
                    {item.name}
                  </Link>
                </p>
              </>
            ))}
            </div>
            <button 
            onClick={() => setCard(!card)}
            className=" w-14 h-14 rounded-lg bg-primary text-white relative flex justify-center items-center">
              <FontAwesomeIcon icon={faShoppingCart} width={20}/>
              <span className="absolute bg-white w-6 h-6 rounded-full text-primary flex items-center justify-center top-[-5px] shadow-md right-[-10px]">
                {totalItem}
              </span>
            </button>
            <button
              onClick={() => setShowNav(!showNav)}
              className="md:hidden w-14 h-14 rounded-lg bg-gray-200/40 relative text-heading1 flex justify-center items-center"
            >
              <FontAwesomeIcon icon={faBars} width={20}/>
            </button>
          </div>
        </div>
        <animated.div
          style={down}
          className={`absolute bg-white w-full left-0 pl-5 top-0 text-xl text-heading1 transition-all duration-75`}
        >
          <ul className="z-[-1]">
            {[{name : "Home", path : '/'}, {name : "Order", path : '/order'}, {name : "Company", path : '/company'}, {name : "FAQ", path : '/faq'}]?.map((item, idx) => (
              <>
                <li className="py-5 ">
                  <Link
                    onClick={()=> setShowNav(false)}
                    href={item.path}
                    className={`
                    ${router.pathname === item.path && 'text-primary'}
                    `}
                  >
                    {item.name}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </animated.div>
      </header>
        <animated.nav style={right} className={` h-screen w-screen md:w-[490px] fixed z-50 right-0 bg-white`}>
              <header className="flex justify-between px-9 pt-7 border-b-2 pb-4">
                  <h1 className="text-3xl font-bold">Your Order</h1>
                  <FontAwesomeIcon className="cursor-pointer" icon={faClose} width={20} onClick={()=> setCard(!card)}/>
              </header>
              <main className={`px-7 overflow-scroll h-[715px] ${test === false && 'h-full flex items-center justify-center'}`}>
              {cart.length > 0 ? 
              <>
              {cart.map(item =>      
              <div className="flex justify-between items-center mt-7">       
                  <div className="flex gap-5" >
                    <Image src={require(`@/assets/images/${item.url}`)} alt="logo" width={70} />
                      <div>
                        <h1 className="font-bold">{item.name}</h1>
                        <p className="text-light">$ {item.price} USD</p>
                        <p onClick={()=>dispatch(removeItem(item.id))} className="cursor-pointer font-light text-red-600">Remove</p>
                      </div>
                  </div>
                  <div className="flex">
                      <div onClick={()=> dispatch(increaseItem(item.id))}  className="border-2 cursor-pointer border-primary text-2xl text-center w-8">+</div>
                      <div className="mt-[3px] border-primary text-xl text-center w-8">{item.quantity}</div>
                      <div onClick={()=> dispatch(decreaseItem(item.id))} className="border-2 cursor-pointer border-primary text-2xl text-center w-8">-</div>
                  </div>
              </div>
                
                )}
                </>
              :
            <div className="w-full flex justify-center items-center flex-col">
              <h1 className="text-center">We Couldn't find any items in your cart</h1>
              <button onClick={()=>{router.push("/order"); setCard(false)}} className="bg-primary mt-7 text-white text-xl px-6 py-4 rounded-md text-center">
                Start an Order
              </button>
            </div>
              
            }
              </main>
              <footer className="absolute bg-white bottom-0 h-32 px-9 py-3 border-t-2 w-full">
                <div className="flex justify-between  text-xl px">
                  <h1 className="text-muted">Subtotal</h1>
                  <h1>$ {totalAmount} USD</h1>
                </div>
                <button className="mt-2 bg-primary text-white w-full h-14 rounded-md">Continue to Checkout</button>
              </footer>
        </animated.nav>
    </>
  );
};

export default Header;
