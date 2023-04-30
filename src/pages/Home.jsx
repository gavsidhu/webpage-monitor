import { useState } from "react";
import axios from "axios";
import isValidHttpsUrl from "../utils/isValidHttpsUrl";
import isValidEmail from "../utils/isValidEmail";

function Home() {
  const [step, setStep] = useState(0);
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");

  const handleUrl = () => {
    const valid = isValidHttpsUrl(url)
    if(valid) {
      setStep(step +1)
    } else {
      alert("Please enter a valid https url")
    }

  }

  const addUrl = async (e) => {
    e.preventDefault()
    const valid = isValidEmail(email)
    if(valid) {
      try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/add-webpage`, {
          url,
          email,
        });
        console.log(res.data);
        setStep(step +1)
        setEmail("")
        setUrl("")
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter a valid email")
    }
  };
  return (
    <div className="max-w-5xl h-screen mx-auto py-24">
      <form>
        {step === 0 && (
          <div className="shadow-2xl rounded-lg max-w-2xl py-6 mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                Enter the webpage you want to track
              </h1>
              <div className="mt-3 w-full">
                <input
                  className="w-1/2 py-2 px-2 mt-1 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                  type="url"
                  required
                  placeholder="https://www.example.com"
                  onChange={(e) => setUrl(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className="flex justify-end px-6 mt-2">
              <button
                className="rounded border border-blue-600 bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                onClick={handleUrl}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="shadow-2xl rounded-lg max-w-2xl py-6 mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                Enter your email
              </h1>
              <div className="mt-3 w-full">
                <input
                  className="w-1/2 py-2 px-2 mt-1 rounded-md border border-gray-200 shadow-sm sm:text-sm"
                  type="email"
                  required
                  placeholder="email@example.com"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </div>
            </div>
            <div className="flex justify-between px-6 mt-2">
              <button
                className="rounded border border-blue-600 bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
              <button
              type="submit"
                className="rounded border border-blue-600 bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                onClick={(e) =>addUrl(e)}
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="shadow-2xl rounded-lg max-w-2xl py-6 mx-auto">
            <div className="text-center">
              <h1 className="text-2xl font-bold">
                Webpage addded successfully
              </h1>
            </div>
            <div className="flex-col flex w-1/2 mx-auto space-y-4 px-6 mt-4">
              <button
                className="rounded border border-blue-600 bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                onClick={() => setStep(0)}
              >
                Home
              </button>
              {/* <button
                className="rounded border border-blue-600 bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                onClick={(e) =>addUrl(e)}
              >
                View Pages
              </button> */}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Home;
