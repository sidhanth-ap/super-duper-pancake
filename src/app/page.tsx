import axios from "axios";


async function getUserDetails() {
  const response = await axios.get("https://random-data-api.com/api/v3/projects/68f72d35-f1bd-4d39-9c06-4e9c3a970680?api_key=WOBZom2_no6mDiDSaTCW6g")
	return response.data;
}
// async component
export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <img src={userData.avatar} alt="" />
          <div>Name: {userData?.first_name}</div>
          Counrty: {userData?.country}
          <div>Gender: {userData?.gender}</div>
          <div>Music Song: {userData?.music_song}</div>
        </div>
      </div>
    </div>
  );
}
