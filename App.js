// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Switch,
	Route, Link } from "react-router-dom";

// Import other React Component
import Createbreakdown from
	"./components/create-breakdown-form";
import Editbreakdown from
	"./components/edit-breakdown.component";
import breakdownList from
	"./components/breakdown-list.component";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-breakdown"}
				className="nav-link">
				RNR App
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-breakdown"}
					className="nav-link">
					Create breakdown
				</Link>
				</Nav>

				<Nav>
				<Link to={"/breakdown-list"}
					className="nav-link">
					breakdown List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Switch>
				<Route exact path="/"
					component={Createbreakdown} />
				<Route path="/create-breakdown"
					component={Createbreakdown} />
				<Route path="/edit-breakdown/:id"
					component={Editbreakdown} />
				<Route path="/breakdown-list"
					component={breakdownList} />
				</Switch>
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
