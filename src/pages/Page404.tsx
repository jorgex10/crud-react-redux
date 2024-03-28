import image from "../assets/Icon404.svg";

function Page404() {
  return (
    <>
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="text-3xl center font-bold">Page Not Found!</h1>
        <p className="mt-4">Looks like this page does not exist!</p>
        <img src={image} alt="404" width={500} />
      </div>
    </>
  );
}

export default Page404;
