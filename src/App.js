import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { Catalog, Produk, ModifierGroups, Transfer, Inventory, Collection } from "./pages/Catalog";

function App() {
return (
	<Router>
	<Sidebar />
	<Switch>
		<Route path="/dashboard" exact component={Dashboard} />
		<Route path="/catalog" exact component={Catalog} />
		<Route path="/catalog/produk" exact component={Produk} />
		<Route path="/catalog/modifier-groups" exact component={ModifierGroups} />
		<Route path="/catalog/transfer" exact component={Transfer} />
		<Route path="/catalog/inventory" exact component={Inventory} />
		<Route path="/catalog/collection" exact component={Collection} />
	</Switch>
	</Router>
);
}

export default App;
