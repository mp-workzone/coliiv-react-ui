import { useEffect } from "react";
import FranchisesPageContent from "../components/franchisesPageContent";
import "../scss/franchises.scss";
function Franchises() {
  useEffect(() => {
    document.body.classList.add('header-light');
    return () => {
      document.body.classList.remove('header-light')
    }
  }, [])

  return <FranchisesPageContent />;
}

export default Franchises;
