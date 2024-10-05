import { useEffect } from "react";
import { useLeads } from "./hooks/useLeads";
import { getData } from "./api/api";

const leadDirection = "leads";

export default function App() {
  const { leads, setLeads } = useLeads();

  useEffect(() => {
    getData(leadDirection).then((data) => {
      setLeads(data);
    });
  }, [setLeads]);

  console.log(leads);

  return (
    <>
      <div></div>
    </>
  );
}
