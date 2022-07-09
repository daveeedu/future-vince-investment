import React, { useState } from 'react';
import AdminDash from "./AdminDash";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { FaUserAltSlash } from "react-icons/fa";
import DeleteModal from '../modal/DeleteModal'

const Users = (props) => {

  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="row feedback-bg-dash-4 ">
      <AdminDash />
      <div className="col-md-8 text-start m-auto row mt-5 ">
        <h1 className="ms-5 text-light">Users</h1>
          <table className="table table-style col-md-12 ms-5 mt-5 text-light ">
            <thead className="text-light">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td className="text-light pt-3">John Doe</td>
                <td className="pt-3">
                  <a href="#" className="text-decoration-none text-light ">
                    <BiEnvelope /> daveeedu@gmail.com
                  </a>
                </td>
                <td className="text-light pt-3">Admin</td>
                <td className="text-light pt-3">Active</td>
                <td className="pt-3"> 
                  <a href="#" className="text-decoration-none text-light pt-3" title="Edit">
                  <FaEdit />
                  </a>
                  <a href="#" className="text-decoration-none text-light pt-3 ms-2" title="Delete">
                  <RiDeleteBin5Line />
                  </a> 
                  <a href="#" className="text-decoration-none text-light ms-2" title="Suspend">
                    <FaUserAltSlash />
                    </a>
                </td>
              </tr>
              <tr>
                <td className="text-light pt-3">John Doe</td>
                <td className="text-light pt-3">
                  <a href="#" className="text-decoration-none text-light">
                  <BiEnvelope /> daveeedu@gmail.com
                  </a>
                </td>
                <td className="text-light pt-3">Admin</td>
                <td className="text-light pt-3">Active</td>
                <td className="pt-3">
                  <a href="#" className="text-decoration-none text-light" title="Edit">
                    <FaEdit />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Delete">
                  <RiDeleteBin5Line />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Suspend">
                    <FaUserAltSlash />
                    </a>
                </td>
              </tr>
              <tr>
                <td className="text-light pt-3">John Doe</td>
                <td className="text-light pt-3">
                  <a href="#" className="text-decoration-none text-light">
                  <BiEnvelope /> daveeedu@gmail.com
                  </a>
                </td>
                <td className="text-light pt-3">Admin</td>
                <td className="text-light pt-3">Active</td>
                <td className="pt-3">
                  <a href="#" className="text-decoration-none text-light" title="Edit">
                    <FaEdit />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Delete">
                  <RiDeleteBin5Line />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Suspend">
                    <FaUserAltSlash />
                    </a>
                </td>
              </tr>
              <tr>
                <td className="text-light pt-3">John Doe</td>
                <td className="text-light pt-3">
                  <a href="#" className="text-decoration-none text-light">
                  <BiEnvelope /> daveeedu@gmail.com
                  </a>
                </td>
                <td className="text-light pt-3">Admin</td>
                <td className="text-light pt-3">Active</td>
                <td className="pt-3">
                  <a href="#" className="text-decoration-none text-light" title="Edit">
                    <FaEdit />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Delete">
                  <RiDeleteBin5Line />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Suspend">
                    <FaUserAltSlash />
                    </a>
                </td>
              </tr>
              <tr>
                <td className="text-light pt-3">John Doe</td>
                <td className="text-light pt-3">
                  <a href="#" className="text-decoration-none text-light">
                  <BiEnvelope /> daveeedu@gmail.com
                  </a>
                </td>
                <td className="text-light pt-3">Admin</td>
                <td className="text-light pt-3">Active</td>
                <td className="pt-3">
                  <a href="#" className="text-decoration-none text-light" title="Edit">
                    <FaEdit />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Delete">
                  <RiDeleteBin5Line />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Suspend">
                    <FaUserAltSlash />
                    </a>
                </td>
              </tr>
              <tr>
                <td className="text-light pt-3">John Doe</td>
                <td className="text-light pt-3">
                  <a href="#" className="text-decoration-none text-light">
                  <BiEnvelope /> daveeedu@gmail.com
                  </a>
                </td>
                <td className="text-light pt-3">Admin</td>
                <td className="text-light pt-3">Active</td>
                <td className="pt-3">
                  <a href="#" className="text-decoration-none text-light" title="Edit">
                    <FaEdit />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Delete" onClick={() => setModalShow(true)}>
                  <RiDeleteBin5Line />
                  </a>
                  <a href="#" className="text-decoration-none text-light ms-2" title="Suspend">
                    <FaUserAltSlash />
                    </a>
                </td>
              </tr>
              </tbody>
          </table>  
        </div>
        <DeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
  );
}


export default Users;

