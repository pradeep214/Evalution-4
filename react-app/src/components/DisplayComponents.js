import React from "react";

function DisplayComponents(props) {
  return (
    <div>
      <h1>These is my data</h1>

      {props.neww.map((el) => {
        return (
          <div>
            <h4>My Name is {el.person.name}</h4>
            <h4>My Age is {el.person.age}</h4>
            <h4>My gender is {el.person.gender}</h4>
            <h4>
              My address is {el.person.address.street},{el.person.address.city},
              {el.person.address.state},{el.person.address.zip}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default DisplayComponents;
