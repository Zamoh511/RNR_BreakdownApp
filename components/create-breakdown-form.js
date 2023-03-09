// CreateBreakdown Component for add new Breakdown

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import BreakdownForm from "./BreakdownForm";

// CreateBreakdown Component
const CreateBreakdown = () => {
const [formValues, setFormValues] =
	useState({ BreakDownRef: '', CompanyName: '', DriverName: '', RegistrationNumber:'',BreakDownDate:'',})
// onSubmit handler
const onSubmit = BreakdownObject => {
	axios.post(
'http://localhost:44377/api/Breakdown/',
	BreakdownObject)
	.then(res => {
		if (res.status === 200)
		alert('Breakdown successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return Breakdown form
return(
	<BreakdownForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Breakdown
	</BreakdownForm>
)
}

// Export CreateBreakdown Component
export default CreateBreakdown
