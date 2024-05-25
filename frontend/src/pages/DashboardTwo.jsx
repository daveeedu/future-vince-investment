import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import BACKEND from "../utils/backend";
import DashNavbar from "../components/DashNavbar";
import Storage from "../utils/storage";
import dayjs from "dayjs";
import { ImWhatsapp } from "react-icons/im";

const DashboardTwo = () => {
	const [user, setUser] = React.useState({});
	const [invested, setInvested] = React.useState(0);
	const [balance, setBalanced] = React.useState(0);
	const [profit, setProfit] = React.useState(0);


	console.log(user, invested, balance, profit)

	// useEffect(() => {
	// 	new BACKEND()
	// 		.isAuthenticated()
	// 		.then((user) => {
	// 			if (user) {
	// 				setUser(user?.data);
	// 				const {activities, ...rest} = user?.data
	// 				console.log(rest)
	// 				Storage.set("user", rest);
	// 			}
	// 		})
	// 		.catch(console.error);
	// }, []);

	useEffect(() => {
		const fetchData = async () => {
		  await getProfit();
		  await getBalance();
		//   await getTotalInvested();
		};
	
		fetchData();
	
		// Fetch user data and set it in state and local storage
		const fetchUserData = async () => {
		  try {
			const user = await new BACKEND().isAuthenticated();
			if (user) {
			  setUser(user?.data);
			  const { activities, ...rest } = user?.data;
			  Storage.set("user", rest);
			}
		  } catch (error) {
			console.error(error);
		  }
		};
	
		fetchUserData();
	  }, []);

	  const getProfit = async () => {
		try {
			const profit = await new BACKEND().getProfit();
            setProfit(profit.data);
        } catch (error) {
			console.error(error);
		} 
		// Implement your requestUsers logic here
	  };

	
	  const getBalance = async () => {
		// Implement your getBalance logic here
		try {
			const bank = await new BACKEND().getBalance();
            setBalanced(bank.data);
        } catch (error) {
			console.error(error);
		} 
	  };
	  
	
	//   const getTotalInvested = async () => {
	// 	try {
	// 		const invested = await new BACKEND().getTotalInvested();
    //         setInvested(invested.data);
    //     } catch (error) {
	// 		console.error(error);
	// 	} 
	// 	// Implement your getTotalInvested logic here
	//   };


	return (
		<Dashboard >
			<DashNavbar />
		<div className="relative">
			
			
			<div className=" dash-text ">
				
				<div className="  ">
					<h3 className="text-start text-[var(--C_black_lite)]  pt-5">
						Good day, {user?.userName || "User"}
					</h3>
					<p className="text-start text-[var(--C_black_lite)] ">
						Welcome to Bitgrow Investment
					</p>
					<div className="md:flex m-auto w-[100%] pb-5">
					<div className=" w-[90%] ">
						<div className="card border-0  mb-3 ">
							<div className="bg-gray-100 card-body rounded-lg drop-shadow-md">
								<p className="card-text fw-bold text-start mt-2">
									Available balance
								</p>
								<h4 className="card-title text-start pt-4">
									${new Intl.NumberFormat().format(user?.bank?.balance  || balance)} USD
								</h4>
							</div>
						</div>
						<div className="card mb-3 border-0">
							<div className="card-body  bg-gray-100 rounded-lg drop-shadow-md">
								<p className="card-text fw-bold text-start mt-2">
									Total Invested
								</p>
								<h4 className="card-title text-start pt-4">
									${new Intl.NumberFormat().format(user?.bank?.invested || invested)} USD
								</h4>
							</div>
						</div>
						<div className="card border-0 mb-5">
							<div className="card-body  bg-gray-100 rounded-lg drop-shadow-md">
								<p className="card-text fw-bold text-start mt-2">
									Total Profits
								</p>
								<h4 className="card-title text-start pt-4">
									${new Intl.NumberFormat().format(user?.bank?.profits  || profit)} USD
								</h4>
							</div>
						</div>
					</div>
					<div className="w-[90%] md:ml-[5%] mr-5">
						<div className="card border-0 mb-3">
							<div className="card-body  bg-gray-100 drop-shadow-md rounded-lg">
								<div className="d-flex justify-content-between">
									<p className="card-text fw-bold text-start mt-2">
										Recent Activities
									</p>
									<p className="mt-2  border-primary border-bottom">
										All
									</p>
								</div>
								{user?.activities?.activities.length ? user?.activities?.activities?.map((activity, index) => {
									return (
										<>
											<hr></hr>
											<div className="text-start font-sze ">
												<span className="card-title text-start pt-3 fs-6">
													{activity.title}
												</span>
												<br></br>
												<span className="card-title text-start ">
                        {dayjs(activity.createdAt).format("DD/MM/YYYY mm:hh")}
												</span>
												<br></br>
												<span className="card-text text-start">{activity.status === 0?'Awaiting confirmation': activity.status === 1 ? 'Confirmed' : 'Declined'}</span>
											</div>
										</>
									);
								}):<p className="card-text text-start">No activities</p>}
								{/* <hr></hr> */}
								
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
        <a href="https://wa.link/b3ynmh" className=" text-decoration-none">
		<ImWhatsapp className="absolute xl:right-[3px] xl:bottom-[9%] lg:right-[2%] md:right-[5%] md:bottom-[10%] right-[8%] bottom-[8%] md:w-[5%] w-[10%] md:h-[5%] h-[10%] text-gray-600"/>
		</a>
		</Dashboard>
	);
};

export default DashboardTwo;
