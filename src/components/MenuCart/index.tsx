import { MenuType, AllMenu } from "@/menu";
import Image from "next/image";
import { NextRouter, Router, useRouter } from "next/router";
import React, { useState } from "react";

interface props {
  menuList: Array<MenuType>;
  type : string;
}

const MenuListAll = ({ menuList, type }: props) => {
  
  return (
    <div className="grid grid-cols-2 gap-4">
        {menuList?.filter((item, key)=>{
          if(type === 'Full Menu'){
            return item
          } else {
            return item.type === type
          }
        }).map((item) => 
        <div key={item.id} className="p-5 border-[1px] rounded-lg">
          <Image
            className="rounded-lg"
            src={require(`@/assets/images/${item.url}`)}
            alt="test"
          />
          <h1 className="mt-4 font-bold text-xl">{item.name}</h1>
          <p className="text-primary">$ {item.price} USD</p>
          <p className="text-muted my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button className="rounded-md bg-primary text-white p-4 font-semibold">
            Add to Cart
          </button>
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
  
  return (
    <div className="grid grid-cols-2 gap-4">
        {menuList?.filter((item, key)=>{
          if(type === 'Full Menu'){
            return item
          } else {
            return item.type === type
          }
        }).slice(0, 4).map((item) => 
        <div key={item.id} className="p-5 border-[1px] rounded-lg">
          <Image
            className="rounded-lg"
            src={require(`@/assets/images/${item.url}`)}
            alt="test"
          />
          <h1 className="mt-4 font-bold text-xl">{item.name}</h1>
          <p className="text-primary">$ {item.price} USD</p>
          <p className="text-muted my-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <button className="rounded-md bg-primary text-white p-4 font-semibold">
            Add to Cart
          </button>
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

  // const test = (path : string) => {
  //   switch(path){
  //     case "/" : 
  //       return [ "Burger", "Sides", "Drinks"];
  //     default : 
  //       return ["Full Menu", "Burger", "Sides", "Drinks"];
  //   }
  // }

  return (
    <div>
      <div className="">
        <div className="grid grid-cols-2 text-header1 gap-3 px-8 ">
          {["Full Menu", "Burger", "Sides", "Drinks"].map((item) => (
            <>
              <button
                className={`${
                  currentTab === item
                    ? "bg-primary text-white"
                    : "border-[1px] border-black/20"
                } p-4 rounded-md `}
                onClick={() => setCurrentTab(item)}
              >
                {item}
              </button>
            </>
          ))}
        </div>
        <div className="text-black px-2 pt-6">{path === 'order' ? getCurrentMenuAll(currentTab) : getCurrentMenu(currentTab)}</div>
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
