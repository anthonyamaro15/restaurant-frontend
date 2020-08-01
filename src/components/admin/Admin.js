import React from "react";
import AdminNavbar from "./AdminNavbar";
import AdminForm from "./AdminForm";
import DisplayItems from "./DisplayItems";

const Admin = () => {
  return (
    <div className="Admin">
      <AdminNavbar />
      <AdminForm />
      <DisplayItems />
    </div>
  );
};

export default Admin;
