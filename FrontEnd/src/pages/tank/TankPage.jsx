import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const TankPage = () => {
    const {tankName} = useParams();
    const [tank, setTank] = useState({});
  return (
    <div>Hi {tankName}</div>
  )
}

export default TankPage