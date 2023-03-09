import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import breakdownTableRow from "./breakdownTableRow";

const breakdownList = () => {
const [breakdowns, setbreakdowns] = useState([]);

useEffect(() => {
	axios
	.get("https://localhost:44377/api/Breakdown")
	.then(({ data }) => {
		setbreakdowns(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return breakdowns.map((res, i) => {
	return <breakdownTableRow obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
            <th>BreakDownRef</th>
            <th>CompanyName</th>
            <th>DriverName</th>
            <th>RegistrationNumber</th>
            <th>BreakDownDate</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default breakdownList;
