import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Table() {
  const [tabledata, settabledata] = useState<any>([]); 
  let api = "https://jsonplaceholder.typicode.com/users";

  let rendertable = () => {
    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        settabledata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    rendertable();
  }, []);

  return (
    <div>
      {tabledata.map((x: any, i: any) => (
        <div className="container p-2 border border-dark shadow rounded " key={i}>
          <table className="border  table table-hover">
            <thead className="thead">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">UserName</th>
                <th scope="col">Phone</th>
                <th scope="col">Website</th> 
              </tr>
            </thead>
            <tbody> 
              <tr>
                <td scope="row">{x.id}</td>
                <td scope="row">{x.name}</td>
                <td scope="row">{x.username}</td>
                <td scope="row">{x.phone}</td>
                <td scope="row">{x.website}</td> 
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
