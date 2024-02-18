import ContactImage from "../../assets/planTripImage/Contact.jpg";
import Button from "../../utils/Button";
import { IoMdSend } from "react-icons/io";

const ContactForm = () => {
  return (
    <div
      id="contact"
      className="max-w-screen-2xl container mx-auto lg:px-28 px-20   bg-orange-300/25 py-6"
    >
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold  text-center text-gradient">
          Contact Me
        </h2>
      </div>

      <div className="flex flex-col items-center gap-10 md:flex-row md:items-start justify-around">
        <div className="flex flex-col items-center justify-center h-full gap-8 w-full md:w-1/2 lg:w-1/3 ">
          <img src={ContactImage} alt="" className="Articles-Image w-full " />
        </div>

        <div className="flex flex-col items-center gap-10 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <form className="w-full md:max-w-md">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2 items-center ">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-gradient"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  required
                  className="w-full py-2 px-4 bg-transparent outline-none rounded-lg text-sm text-black border-orange-500 border-2"
                />
              </div>
              <div className="flex flex-col gap-2 items-center ">
                <label
                  htmlFor="email"
                  className="text-sm font-bold  text-gradient"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  placeholder="E-mail"
                  id="email"
                  required
                  className="w-full py-2 px-4 bg-transparent outline-none rounded-lg text-sm text-black border-orange-500 border-2"
                />
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-gradient"
                  >
                    Message
                  </label>
                </div>

                <div>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    className="w-full py-2 px-4 bg-transparent outline-none rounded-lg text-sm text-black border-orange-500 border-2"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button
          type="submit"
          title="Send Message"
          icon={<IoMdSend />}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactForm;
