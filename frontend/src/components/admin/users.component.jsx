import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { FaUserAltSlash, FaUser } from "react-icons/fa";
import dayjs from "dayjs";
import BACKEND from "../../utils/backend";
import DeleteModal from "../modal/DeleteModal";

function Users({ user, that}) {
	console.log(user);
 const {state} = that;
	const [modalShow, setModalShow] = useState(false);

	async function handleClick(e) {
		e.preventDefault();
		let targ = e.target;

		try {
			while (targ.tagName !== "A") {
				targ = targ.parentElement;
			}
		} catch (e) {
		} finally {
   let id, newState;
			if (targ) {
				switch (targ.getAttribute("href")) {
					case "#delete":
       id = targ.getAttribute("data-id");
      new BACKEND().delete(id);

      newState = state.users.filter(user=> user.user._id !== id);
      that.setState({...state, users: [...newState]})
						break;
					case "#edit":
      id = targ.getAttribute("data-id");
      that.setState({...state, id});
						
						break;
					case "#suspend":
       id = targ.getAttribute("data-id");
      const { data } = await new BACKEND().toggleSuspension(id)
      newState =  state.users.map(user => {
       if(user.user._id === id) user.user.status = data.status;
       return user
      })
      that.setState({...state, users: [...newState]});
						break;
					default:
						return "Not found";
				}
			}
		}
	}

 function getStatus(code) {
  switch (code) {
   case 0: return 'Inactive';
   case 1: return 'Active';
   case 2: return 'Suspended';
   default: return 'Unknown'
  }
 }

	return (
		<tr onClick={async e => await handleClick(e)}>
			<td className="text-[var(--C_black_lite)] pt-3">{user.name || user.userName}</td>
			<td className="pt-3">
				<span
					href={"mailto:" + user.email}
					className="text-decoration-none bg-gray-300 ">
					<div className="flex">
					<BiEnvelope className="mt-1 mr-3"/> 
					<span>{user.email}</span>
					</div>
				</span>
			</td>
			<td className="text-[var(--C_black_lite)] pt-3">{dayjs(user?.user?.lastLogin || user?.user?.createdAt)?.format('DD/MM/YYYY HH:mm')}</td>
			<td className="text-[var(--C_black_lite)] pt-3">
				{getStatus(user?.status)}
			</td>
			<td className="pt-3">
				<div className="flex">
				<a
					href="#edit"
					className="text-decoration-none text-[var(--C_black_lite)] pt-2"
					title="Edit"
					data-id={user?._id}>
					<FaEdit onClick={() => setModalShow(true)} className="text-gray-800"/>
				</a>
				<a
					href="#delete"
					data-id={user?._id}
					className="text-decoration-none text-[var(--C_black_lite)] pt-2 ms-2"
					title="Delete">
					<RiDeleteBin5Line className="text-gray-800"/>
				</a>
    {
     [0, 1].includes(user?.user?.status) ?
				<a
					href="#suspend"
					className="text-decoration-none text-[var(--C_black_lite)]  pt-2 ms-2"
					title="Suspend"
					data-id={user?._id}>
					<FaUserAltSlash className="text-gray-800"/>
				</a>
    :
				<a
					href="#suspend"
					className="text-decoration-none text-[var(--C_black_lite)] pt-2 ms-2"
					title="Revoke suspension"
					data-id={user?._id}>
					<FaUser className="text-gray-800"/>
				</a>
} 
				</div>
			</td>
			<DeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        state={state}
      />
		</tr>
	);
}

export default Users;
