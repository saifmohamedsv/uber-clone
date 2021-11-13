import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

export const carList = [
  {
    imgUrl: "https://i.ibb.co/cyvcpfF/uberx.png",
    service: "UberX",
    multiplier: 1.0,
  },
  {
    imgUrl: "https://i.ibb.co/YDYMKny/uberxl.png",
    service: "UberXL",
    multiplier: 1.5,
  },
  {
    imgUrl: "https://i.ibb.co/Xx4G91m/uberblack.png",
    service: "Black",
    multiplier: 2.0,
  },
  {
    imgUrl: "https://i.ibb.co/cyvcpfF/uberx.png",
    service: "Comfort",
    multiplier: 1.2,
  },
  {
    imgUrl: " https://i.ibb.co/1nStPWT/uberblacksuv.png",
    service: "Black SUV",
    multiplier: 2.8,
  },
];

const RideSelector = (props) => {
  const [rideDuration, setRideDuration] = useState();

  useEffect(() => {
    const token =
      "pk.eyJ1Ijoic2FpZm1vaGFtZWRzdiIsImEiOiJja3ZwNGNneWIwd2E3MndxaG14djg0endqIn0.Y_JAbXg08WKPINYkZC4AdA";
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${props.pickup[0]}, ${props.pickup[1]};${props.dropoff[0]},${props.dropoff[1]}?` +
        new URLSearchParams({
          access_token: token,
        })
    )
      .then((data) => data.json())
      .then((res) => {
        setRideDuration(res?.routes[0]?.duration / 100);
        console.log("duration", res);
      });
  }, [props.pickup, props.dropoff]);
  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((res, index) => (
          <Car key={index}>
            <CarImage src={res.imgUrl} />
            <CarDetails>
              <Service>{res.service}</Service>
              <Time>{res.multiplier} min away</Time>
            </CarDetails>
            <Price>${(rideDuration * res.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;
const Wrapper = tw.div`
flex-1 overflow-y-hidden flex flex-col
`;
const Title = tw.div`
text-center text-gray-500 border bg-gray-50 text-xs py-2
`;
const CarList = tw.div`
overflow-y-scroll
`;
const Car = tw.div`
flex items-center p-4 
`;
const CarImage = tw.img`
h-14 mr-4
`;
const CarDetails = tw.div`
flex flex-col flex-1
`;
const Service = tw.div`
font-medium 
`;
const Time = tw.div`
font-medium text-xs text-blue-500
`;
const Price = tw.div`
font-medium
`;
