export interface MenuType {
    id : number;
    type : string;
    name : string;
    price : number;
    url : string;
}

export const AllMenu : Array<MenuType> = [
    {
        id : 1,
        type : 'Burger',
        name : 'Burger Buddy',
        price : 50,
        url : 'burgerBuddy.png'
    },
    {
        id : 2,
        type : 'Burger',
        name : 'Burger Dream',
        price : 20,
        url : 'burgerDream.png'
    },
    {
        id : 3,
        type : 'Burger',
        name : 'Burger Classic',
        price : 30,
        url : 'burgerClassic.png'
    },
    {
        id : 4,
        type : 'Burger',
        name : 'Burger Cali',
        price : 26,
        url : 'burgerCali.png'
    },
    {
        id : 5,
        type : 'Burger',
        name : 'Burger Waldo',
        price : 28,
        url : 'burgerWaldo.png'
    },
    {
        id : 6,
        type : 'Burger',
        name : 'Burger Spicy',
        price : 32,
        url : 'burgerSpicy.png'
    },
    {
        id : 7,
        type : 'Sides',
        name : 'Fries Cheese',
        price : 32,
        url : 'friesCheese.png'
    },
    {
        id : 8,
        type : 'Sides',
        name : 'Fries Rustic',
        price : 30,
        url : 'friesRustic.png'
    },
    {
        id : 9,
        type : 'Sides',
        name : 'Fries Rustic',
        price : 20,
        url : 'saladCaeser.png'
    },
    {
        id : 10,
        type : 'Sides',
        name : 'Fries Rustic',
        price : 24,
        url : 'beanSlow.png'
    },
    {
        id : 11,
        type : 'Drinks',
        name : 'Liquor',
        price : 10,
        url : 'liquor.png'
    },
    {
        id : 12,
        type : 'Drinks',
        name : 'Lime',
        price : 2,
        url : 'lime.png'
    },
    {
        id : 13,
        type : 'Drinks',
        name : 'Cola',
        price : 3,
        url : 'cola.png'
    },
    {
        id : 14,
        type : 'Drinks',
        name : 'Fig & Liem',
        price : 4,
        url : 'fig&liem.png'
    },
]

export interface steps {
    url : string,
    head : string,
    title : string 
}

export const questionFood : Array<string> = [
    "Do you offer any vegan options?",
    "Do you offer any gluten free options?",
    "Can I clone these sections?",
    "Why is Webflow so amazing?",
    "Do we need to write a business plan?",
    "How can we get funding for our start up?"
]



export const worked : Array<steps> = [
    {
      url: 'Step01.png',
      head: "Adapt your menu items",
      title:
        "Easily adapt your menu using the webflow CMS and allow customers to browse your items.",
    },
    {
      url: 'Step02.png',
      head: "Accept online orders & takeout",
      title:
        "Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.",
    },
    {
      url: 'Step03.png',
      head: "Manage delivery or takeout",
      title:
        "Manage your own logistics and take orders simply through the ecommerce system.",
    },
  ];


