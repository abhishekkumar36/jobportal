// EmployerProfileCard
// PostedJobsList
// ApplicantsList
// ShortlistedCandidatesList
// RejectedCandidatesList

import { useEffect } from "react";
import Header from "../ui/Header";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const RecruiterDashboardPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("rtoken") === null) {
      navigate("/recruiter/signin");
    }
  }, [navigate]);
  return (
    <div>
      <Header page="employer" />
      <Outlet />
    </div>
  );
};

export default RecruiterDashboardPage;
