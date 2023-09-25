import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  // Connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if(firstName && lastName && phone && email && address && message){

      
      const res = fetch(
      "https://reactfirebasewebsite-ef7f4-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          email,
          address,
          message,
        }),
      }
    );
    if(res){
      setUserData({ firstName:"",
      lastName:"",
      phone:"",
      email:"",
      address:"",
      message:"",})
      alert("Data Stored")
    }
    else{
      alert("Please fill the data")
    }
  }
  else{
    alert("Please fill the data")
  }

  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our Sales Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Culpa aut, tenetur voluptatem inventore pariatur, nemo
                    reprehenderit nostrum quae .
                  </p>
                  <figure>
                    <img src="./images/hero1.jpg"
                      alt="contactUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                {/* Right side contact form */}

                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number"
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="email"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Your Email"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter your message"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>

                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para"
                        for="flexCheckDefault"
                      >
                        I agree to the terms and conditions as set out by the
                        user agreement.
                      </label>
                    </div>
                    <button
                      className="btn btn-style w-100"
                      type="submit"
                      onClick={submitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
