import React, { useState } from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";
const Search = () => {
  const [pickup, setpickup] = useState("");
  const [dropoff, setdropoff] = useState("");
  return (
    <Wrapper>
      {/* == Button Container == */}
      <Link href="/">
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </ButtonContainer>
      </Link>
      {/*  == Input Container ==  */}
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => {
              setpickup(e.target.value);
            }}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => {
              setdropoff(e.target.value);
            }}
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
      {/* == Saved Places ==  */}
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: { pickup: pickup, dropoff: dropoff },
        }}
      >
        <ConfirmButton>Confirm Location</ConfirmButton>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
  bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
  bg-white p-4
`;

const BackButton = tw.img`
  h-10 cursor-pointer
`;

const FromToIcons = tw.div`
  w-10 flex flex-col mr-1 items-center gap-1
`;

const InputContainer = tw.div`
  bg-white flex items-center p-4
`;

const Circle = tw.img`
  h-2.5
`;

const Line = tw.img`
  h-10
`;

const Square = tw.img`
  h-3
`;

const InputBoxes = tw.div`
  flex flex-col flex-1
`;

const Input = tw.input`
  h-10 bg-gray-200 my-2 p-2 rounded-md outline-none
`;

const PlusIcon = tw.img`
  w-10 h-10 bg-gray-200 rounded-full ml-4
`;

const SavedPlaces = tw.div`
  flex items-center bg-white px-4 py-2 text-xl mt-2
`;

const StarIcon = tw.img`
  bg-gray-400 w-10 h-10 p-2 rounded-full mr-2 
`;
const ConfirmButton = tw.div`
bg-black p-3 mx-4 text-white mt-2 text-center text-2xl cursor-pointer
`;
