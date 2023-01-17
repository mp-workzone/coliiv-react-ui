import { useEffect } from "react";
import CareerPageContent from "../components/careerPageContent";
import "../scss/career.scss";
function Career() {
  useEffect(() => {
    document.body.classList.add('header-light');
    return () => {
      document.body.classList.remove('header-light')
    }
  }, [])

    return <CareerPageContent />;
}

export default Career;
