export const MenuItems = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "Our Team", id: "team" },
  // { name: "Portfolio" },
  { name: "About", id: "about" },
  { name: "Contact us", id: "contact" },
];

export type ScreenType = {
  name: string;
  color: string;
  calculate: string;
}

export const appScreens: ScreenType[] = [
  {
    name: "home",
    color: "#fff",
    calculate: "now"
  },
  {
    name: "services",
    color: "#676767",
    calculate: "later"
  },
  {
    name: "team",
    color: "#fff",
    calculate: "now"
  },
  // {
  //   name: "portfolio",
  //   color: "#fff",
  //   calculate: "later"
  // },
  {
    name: "about",
    color: "#676767",
    calculate: "later"
  },
  {
    name: "contact",
    color: "#676767",
    calculate: "later"
  }
]