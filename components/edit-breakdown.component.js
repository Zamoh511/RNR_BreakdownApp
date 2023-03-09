// Editbreakdown Component for update breakdown data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import breakdownForm from "./breakdownForm";

// Editbreakdown Component
const Editbreakdown = (props) => {
const [formValues, setFormValues] = useState({
	BreakDownRef: "",
	CompanyName: "",
	DriverName: "",
    RegistrationNumber:"",
    BreakDownDate:"",
});
	
//onSubmit handler
const onSubmit = (breakdownObject) => {
	axios
	.put(
		"http://localhost:44337/api/Breakdown/" +
		props.match.params.id,
		breakdownObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("breakdown successfully updated");
		props.history.push("/breakdown-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize breakdown form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/Breakdown/update-breakdown/"
		+ props.match.params.id
	)
	.then((res) => {
		const {BreakDownRef,
	CompanyName,
	DriverName,
    RegistrationNumber,
    BreakDownDate} = res.data;
		setFormValues({BreakDownRef,
	CompanyName,
	DriverName,
    RegistrationNumber,
    BreakDownDate});
	})
	.catch((err) => console.log(err));
}, []);

// Return breakdown form
return (
	<breakdownForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update breakdown
	</breakdownForm>
);
};

// Export Editbreakdown Component
export default Editbreakdown;
