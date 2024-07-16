import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("token") ? true : false;

  const handleReservation = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!isLoggedIn) {
      toast.error("Please login first.");
      return;
    }

    // Format date to dd-mm-yyyy format
    const formattedDate = date.split('-').reverse().join('-');

    try {
      const { data } = await axios.post(
        "https://cusine.feista-flavours.infinityfreeapp.com/api/v1/reservation/send",
        { firstName, lastName, email, phone, date: formattedDate, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="reserve">
    <Navbar/>
    <h1 style={{
      textAlign: "center",
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        color: '#333', 
        textTransform: 'uppercase',
        marginBottom: '20px'
      }}>Enjoy More Than a Meal: Reserve Your Evening of Gastronomy</h1>
      <section className="reservation" id="reservation">
        
        <div className="container">
          <div className="banner">
            <img src="/reservation.png" alt="res" />
          </div>
          <div className="banner">
            <div className="reservation_form_box">
              <h1>MAKE A RESERVATION</h1>
              <p>For Further Questions, Please Call</p>
              <form onSubmit={handleReservation}>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="date"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <input
                    type="time"
                    placeholder="Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="email_tag"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <button type="submit">
                  RESERVE NOW{" "}
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservation;