import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { BarGraph } from "../component/bar";
import { ProgressBar } from "../component/progressBar";
import { PieGraph } from "../component/pie";
import { string } from "prop-types";

export const Finances = () => {
	const { store, actions } = useContext(Context);

	const [category, setCategory] = useState("");
	const [submit, setSubmit] = useState(false);

	var date = new Date();
	let current_month_num = date.getMonth();
	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	let current_month = months[current_month_num];
	const [month, setMonth] = useState(current_month);

	let current_year = date.getFullYear();
	const [year, setYear] = useState(current_year);
	//to match with python current time standar

	{
		/*const handleSubmit = e => {
		e.preventDefault();
		if (year === "" || month === "" || category === "") {
			alert("Please fill all the entries");
		}

		setSubmit(true);

		///ESTO NO NECESITA UN FETCH JAJA
		const data = {
			year: year,
			month: month,
			category: category
		};
		fetch(process.env.BACKEND_URL + "", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => {
				if (!response.ok) {
					response.text().then(text => alert(text));
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(data => {
				console.log("Succesfull data recovery");
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};*/
	}

	return (
		<div className="container d-flex justify-content-center mt-2">
			<div className="formulario2 mb-5 row">
				<h3 className="mt-2">Your Finances</h3>
				<div>
					<form /*onSubmit={e => handleSubmit(e}*/>
						<div className="form-row mt-3">
							<label htmlFor="month">Select Year</label>
							<select
								onChange={e => setYear(parseInt(e.target.value))}
								className="form-control"
								name="month"
								id="month">
								<option value="" selected disabled hidden>
									current_year
								</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
							</select>
						</div>
						<div className="form-row mt-3">
							<label htmlFor="month">Select Month</label>
							<select
								onChange={e => setMonth(parseInt(e.target.value))}
								className="form-control"
								name="month"
								id="month">
								<option value="" selected disabled hidden>
									current_month
								</option>
								<option value="1">January</option>
								<option value="2">February</option>
								<option value="3">March</option>
								<option value="4">April</option>
								<option value="5">May</option>
								<option value="6">June</option>
								<option value="7">July</option>
								<option value="8">August</option>
								<option value="9">September</option>
								<option value="10">October</option>
								<option value="11">November</option>
								<option value="12">December</option>
							</select>
						</div>
						<div className="form-row mt-3">
							<label htmlFor="category">Select Category</label>

							<select
								onChange={e => setCategory(e.target.value)}
								className="form-control"
								name="category"
								id="category">
								<option value="" selected disabled hidden>
									Category
								</option>
								<option value="All">All</option>
								<option value="Home">Home</option>
								<option value="Food">Food</option>
								<option value="Transport">Transport</option>
								<option value="Services">Services</option>
								<option value="Education">Education</option>
								<option value="Clothing">Clothing</option>
								<option value="Entertainment">Entertainment</option>
							</select>
						</div>
						\
					</form>
				</div>
				{category == "All" ? (
					<div>
						<ProgressBar dato={30} />
						<BarGraph datos={[90000, 49000, 50000, 10000]} />
						<PieGraph datos={[90000, 49000, 50000, 10000, 234234, 234234, 11210]} />
					</div>
				) : (
					<div>
						<ProgressBar dato={30} />
						<BarGraph datos={[90000, 49000, 50000, 10000]} />
					</div>
				)}
			</div>

			<div className="posicionFooter" />
		</div>
	);
};
