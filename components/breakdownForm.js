import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const breakdownForm = (props) => {
const validationSchema = Yup.object().shape({
	BreakDownRef: Yup.string().required("Required"),
	CompanyName: Yup.string()
	.CompanyName("You have enter an invalid CompanyName ")
	.required("Required"),
	DriverName: Yup.string()	
	.required("Required"),
    RegistrationNumber: Yup.string()	
	.required("Required"),
    BreakDownDate: Yup.string()	
	.required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="CompanyName" type="text"
				className="form-control" />
			<ErrorMessage
			name="CompanyName"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<FormGroup>
			<Field name="BreakDownDate" type="text"
				className="form-control" />
			<ErrorMessage
			name="BreakDownDate"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>		

        <FormGroup>
			<Field name="DriverName" type="number"
				className="form-control" />
			<ErrorMessage
			name="DriverName"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>

        <FormGroup>
			<Field name="RegistrationNumber" type="number"
				className="form-control" />
			<ErrorMessage
			name="RegistrationNumber"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default breakdownForm;
