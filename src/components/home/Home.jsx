import { useState, useEffect } from "react";
import { API_URL } from "../../constants/Api";
import SingleUni from "./SingleUni";
import Heading from "../heading/Heading";


function Home() {
  const [university, setUni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(API_URL);

        if (response.ok) {
          const json = await response.json();
          console.log(json);
          setUni(json);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR: An error occured</div>;
  }

  return (
    <div className="universities">
      <Heading title="Home" />
      {university.map(function (uni) {
        const { name, web_pages } = uni;
        return <SingleUni key={name} name={name} web_pages={web_pages} />;
      })}
    </div>

  );
}

export default Home;