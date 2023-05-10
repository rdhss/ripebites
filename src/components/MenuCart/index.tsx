import { MenuType, AllMenu } from "@/menu";
import { useSpring, animated, useTransition } from "@react-spring/web";
import Image from "next/image";
import { NextRouter, Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseItem, increaseItem } from "slices/slices";
import { RootState } from "store";

interface props {
  menuList: Array<MenuType>;
  type : string;
}

const MenuListAll = ({ menuList, type }: props) => {
  const dispatch = useDispatch()
  const handleAddTocart = (data : MenuType) => {
    dispatch(addToCart({...data, quantity : 1}))
  }
  
  const cart = useSelector((state : RootState) => state.slices.cartItem)

  return (
    <div className="grid grid-cols-2 gap-4 animate-fade-in md:px-4">
        {menuList?.filter((item, key)=>{
          if(type === 'Full Menu'){
            return item
          } else {
            return item.type === type
          }
        }).map((item) => 
        <div key={item.id} className="p-5 border-[1px] rounded-lg md:flex">
          <Image
            className="rounded-lg md:w-32 md:mr-9"
            src={require(`@/assets/images/${item.url}`)}
            alt="test"
          />
          <div>
          <div className="md:flex md:justify-between w-full">
          <h1 className="mt-4 md:mt-0 font-bold text-xl">{item.name}</h1>
          <p className="text-primary">$ {item.price} USD</p>
          </div>
          <div>
          <p className="text-muted my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          {cart.map(item => {return item.id}).includes(item.id) ? 
        <div className="flex">
            <div onClick={()=> dispatch(increaseItem(item.id))} className="border-2 cursor-pointer border-primary text-2xl text-center w-8">+</div>
            <div className="mt-[3px] border-primary text-xl text-center w-8">{cart[cart.findIndex(test => test.id === item.id)].quantity}</div>
            <div onClick={()=> dispatch(decreaseItem(item.id))} className="border-2 cursor-pointer border-primary text-2xl text-center w-8">-</div>
        </div>
          :
          <button onClick={()=>handleAddTocart(item)} className="rounded-md bg-primary text-white p-4 font-semibold">
            Add to Cart
          </button>
        }
          </div>
          </div>
        </div>
        )}
    </div>
  );
};

interface props {
  menuList: Array<MenuType>;
  type : string;
}

const MenuList = ({ menuList, type }: props) => {
 
  const dispatch = useDispatch()
  const handleAddTocart = (data : MenuType) => {
    dispatch(addToCart({...data, quantity : 1}))
  }
  
  const cart = useSelector((state : RootState) => state.slices.cartItem)

  return (
    <div className="grid grid-cols-2 gap-4 md:px-20">
        {menuList?.filter((item, key)=>{
          if(type === 'Full Menu'){
            return item
          } else {
            return item.type === type
          }
        }).slice(0, 4).map((item) => 
        <div  key={item.id} className="p-5 border-[1px] rounded-lg md:flex">
          <Image
            className="rounded-lg md:w-32 md:mr-9"
            src={require(`@/assets/images/${item.url}`)}
            alt="test"
          />
          <div>
          <div className="md:flex md:justify-between w-full">
          <h1 className="mt-4 md:mt-0 font-bold text-xl">{item.name}</h1>
          <p className="text-primary">$ {item.price} USD</p>
          </div>
          <div>
          <p className="text-muted my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          {cart.map(item => {return item.id}).includes(item.id) ? 
        <div className="flex">
            <div onClick={()=> dispatch(increaseItem(item.id))} className="border-2 cursor-pointer border-primary text-2xl text-center w-8">+</div>
            <div className="mt-[3px] border-primary text-xl text-center w-8">{cart[cart.findIndex(test => test.id === item.id)].quantity}</div>
            <div onClick={()=> dispatch(decreaseItem(item.id))} className="border-2 cursor-pointer border-primary text-2xl text-center w-8">-</div>
        </div>
          :
          <button onClick={()=>handleAddTocart(item)} className="rounded-md bg-primary text-white p-4 font-semibold">
            Add to Cart
          </button>
        }
          </div>
          </div>
        </div>
        )}
    </div>
  );
};

interface menu {
  path : string
}

const MenuCart = ({path} : menu) => {
  const [currentTab, setCurrentTab] = useState<string>("Full Menu");
  const [Menu, setMenu] = useState<Array<MenuType>>(AllMenu)
  const [fading, setFading] = useState<boolean>(true)
  const router : NextRouter = useRouter()

  const getCurrentMenu = (currentMenu: string) => {
    switch (currentMenu) {
      case "Full Menu":
        return <MenuList menuList={Menu} type={currentTab}/>;
      case "Burger":
        return <MenuList menuList={Menu} type={currentTab}/>;
      case "Sides":
        return <MenuList menuList={Menu} type={currentTab}/>;
      case "Drinks":
        return <MenuList menuList={Menu} type={currentTab}/>;
      default:
        return <h1>test</h1>;
    }
  };

  const getCurrentMenuAll = (currentMenu: string) => {
    switch (currentMenu) {
      case "Full Menu":
        return <MenuListAll menuList={Menu} type={currentTab}/>;
      case "Burger":
        return <MenuListAll menuList={Menu} type={currentTab}/>;
      case "Sides":
        return <MenuListAll menuList={Menu} type={currentTab}/>;
      case "Drinks":
        return <MenuListAll menuList={Menu} type={currentTab}/>;
      default:
        return <h1>test</h1>;
    }
  };

  const fade = useSpring({
    opacity : fading ? 1 : 0,
  })


  const handleChangetab = (item : string) => {
      setFading(false)
      setTimeout(() => {
        setFading(true)
        setCurrentTab(item)
      }, 200);
  } 

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4 text-header1 gap-3 px-8 md:px-96">
          {["Full Menu", "Burger", "Sides", "Drinks"].map((item) => (
            <>
              <button
                className={`${
                  currentTab === item
                    ? "bg-primary text-white"
                    : "border-[1px] border-black/20"
                } p-4 rounded-md `}
                onClick={() => handleChangetab(item)}
              >
                {item}
              </button>
            </>
          ))}
        </div>
        <animated.div style={fade} className="text-black px-2 pt-6">{path === 'order' ? getCurrentMenuAll(currentTab) : getCurrentMenu(currentTab)}</animated.div >
        <div className="flex justify-center mt-10">
        {path !== "order" 
        
        && <button onClick={()=> router.push("/order")} className="py-4 px-9 bg-primary rounded-lg text-white font-semibold">See Full Menu</button>
        }
        </div>
      </div>
    </div>
  );
};

export default MenuCart;
