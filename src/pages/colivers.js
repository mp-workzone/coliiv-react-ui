import { useEffect } from "react";
import ColiversPageContent from "../components/coliversPageContent";
import "../scss/colivers.scss";
function Colivers() {
    useEffect(() => {
        document.body.classList.add("header-light");
        return () => {
            document.body.classList.remove("header-light");
        };
    }, []);

    return <ColiversPageContent />;
}

export default Colivers;
