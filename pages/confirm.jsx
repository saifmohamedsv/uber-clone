import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "./components/map";
import RideSelector from "./components/RideSelector";
const Confirm = () => {
  const [Pickup, setPickup] = useState(["", ""]);

  const [Dropoff, setDropoff] = useState(["", ""]);

  const router = useRouter();
  const { pickup, dropoff } = router.query;

  // PICKUP
  const getPickupCoords = () => {
    const token =
      "pk.eyJ1Ijoic2FpZm1vaGFtZWRzdiIsImEiOiJja3ZwNGNneWIwd2E3MndxaG14djg0endqIn0.Y_JAbXg08WKPINYkZC4AdA";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token: token,
          limit: 1,
        })
    )
      .then((data) => data.json())
      .then((res) => {
        setPickup(res?.features[0]?.center);
      });
  };
  // DROPOFF
  const getDropoffCoords = () => {
    const token =
      "pk.eyJ1Ijoic2FpZm1vaGFtZWRzdiIsImEiOiJja3ZwNGNneWIwd2E3MndxaG14djg0endqIn0.Y_JAbXg08WKPINYkZC4AdA";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token: token,
          limit: 1,
        })
    )
      .then((data) => data.json())
      .then((res) => {
        setDropoff(res?.features[0]?.center);
      });
  };

  useEffect(() => {
    getPickupCoords();
    getDropoffCoords();
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <Link href="/search" passHref>
        <BackButton>
          <BackArrow src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </BackButton>
      </Link>
      <Map pickup={Pickup} dropoff={Dropoff} />
      <RideContainer>
        <RideSelector pickup={Pickup} dropoff={Dropoff} />
        <ButtonContainer>
          <Button>Confirm UberX</Button>
        </ButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
  flex flex-col h-screen 
`;
const RideContainer = tw.div`
  flex flex-col flex-1 h-1/2
`;
const ButtonContainer = tw.div`
  border-t-4
`;
const Button = tw.div`
bg-black text-white text-center my-4 mx-4 py-4 text-xl 
`;
const BackButton = tw.div`
  absolute
  bg-white
  drop-shadow-2xl
  shadow-lg
  rounded-full
  w-12 h-12
  top-4
  left-4
  z-50
  m-2
  p-2
  cursor-pointer
`;
const BackArrow = tw.img`
  h-full object-contain
`;
