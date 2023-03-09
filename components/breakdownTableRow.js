import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const breakdownTableRow = (props) => {
const { _id, name, email, rollno } = props.obj;

const deletebreakdown = () => {
	axios
	.delete(
"http://localhost:44377/api/Breakdown/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("breakdown successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
        <th>Id</th>
	<th>BreakDownRef</th>
<th>CompanyName</th>
<th>DriverName</th>
<th>RegistrationNumber</th>
<th>BreakDownDate</th>
	<td>
		<Link className="edit-link"
		to={"/edit-breakdown/" + _id}>
		Edit
		</Link>
		<Button onClick={deletebreakdown}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default breakdownTableRow;
