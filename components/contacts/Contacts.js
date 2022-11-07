import React from "react";
import { useSelector } from "react-redux";
import Contact from "./Contact";


const Contacts = () => {
 
  const contacts = useSelector((state) => state.contact.contacts);


  return (
    <div>
      <table className="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
              </div>
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>E-mail</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
