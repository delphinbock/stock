// Components
import Home from "../components/home";
import Companies from "../components/companies";

export const routes: any =
[
  {
    path: "/",
    sidebar: () => (<span>Home</span>),
    main: () => <Home />
  },
  {
    path: "/companies",
    sidebar: () => (<span>Companies</span>),
    main: () => <Companies />
  }
];
