import profilepic from "./assets/profile.jpg";

function Card() {
  return (
    <>
    
      <div className="border m-5 p-2 flex  flex-col text-center items-center shadow max-w-xs  ">
        <img
          src={profilepic}
          alt="profile image"
          className="mb-2 w-24 h-24 rounded-full "
        />
        <h1 className=" font-bold text-gray-800">Nishedh</h1>
        <p className="text-gray-500">Hello! I am nishedh khadka from ktm .</p>
      </div> 
    
     
    </>
  );
}

export default Card;
