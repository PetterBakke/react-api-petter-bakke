// import { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { API_URL } from "../../constants/Api";

// function universityDetails() {
//   const [uni, setUni] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   let history = useHistory();

//   const { id } = useParams();

//   if (!id) {
//     history.push("/");
//   }

//   const url = API_URL + "/" + id;

//   useEffect(function () {
//     async function fetchData() {
//       try {
//         const response = await fetch(url);

//         if (response.ok) {
//           const json = await response.json();
//           console.log(json);
//           setUni(json);
//         } else {
//           setError("An error occured");
        
//         } 
//         } catch (error) {
//           setError(error.toString());
//         } finally {
//           setLoading(false);
//         }
//       }
      
//       fetchData();
//   }, [url]
//   );

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>An error occured: {error}</div>;
//   }

//   return (
//     <div className="uni-detail">
//       <h1>{uni.name}</h1>
//       <p>{uni.web_pages}</p>
//     </div>
//   );
// }

// export default universityDetails();