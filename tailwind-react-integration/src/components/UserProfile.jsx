function UserProfile() {
    return (
      <div className="bg-grey-100 sm:p-4 sm:p-6 md:p-8  md:max-w-sm max-w-xs  mx-auto my-10 sm:my-20 rounded-lg shadow-lg">

        <img src="https://via.placeholder.com/150"
        className="rounded-full mx-auto sm:h-24  sm:w-24  md:w-36 md:h-36" 
        alt="User" />

        <h1 className="text-xl   md:text-xl  md:text-2xl text-blue-800 my-3 sm:my-4">John Doe</h1>
        <p className="text-grey-600 text-lg text-sm sm:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>

      </div>
    );
  }
  
  export default UserProfile;
