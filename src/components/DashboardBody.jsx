import React from "react";
import UserProfile from "./UserProfile";
import MessageBox from "./MessageBox";
import ContactsBox from "./ContactsBox";

function DashboardBody() {
  const dashboardStyles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr"
  }

  return (
    <div style={dashboardStyles}>
      <UserProfile></UserProfile>
      <MessageBox></MessageBox>
      <ContactsBox></ContactsBox>
    </div>
  );

}

export default DashboardBody;
