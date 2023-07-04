export function Contact() {
  return(
  <div>
    <form className="my-10">
      <input
        type="checkbox"
        id=""
        className="hidden"
        style={{ display: "none" }}
      ></input>

      <div className="mb-5">
        <input
          type="text"
          placeholder="Full Name"
          autoComplete="false"
          className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-1`}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="email_address" className="sr-only">
          Email Address
        </label>
        <input
          id="email_address"
          type="email"
          placeholder="Email Address"
          name="email"
          autoComplete="false"
          className={`w-full px-4 py-3 border-2 rounded-md outline-none focus:ring-1`}
        />
      </div>

      <div className="mb-3">
        <textarea
          name="message"
          placeholder="Your Message"
          className={`w-full px-4 py-3 border-2 rounded-md outline-none  h-36 focus:ring-1`}
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7">
        Send Message
        {/* <svg
          className="w-5 h-5 mx-auto text-white animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg> */}
      </button>
    </form>
  </div>
  )
}