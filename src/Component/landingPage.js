import React from "react";
import client1 from "./images/landing_page_img3.png";
import client2 from "./images/landing_page_img4.png";
import client3 from "./images/landing_page_img5.png";
import client4 from "./images/landing_page_img6.png";
import logo from "./images/landing_page_img2.png";
import adwordsImg from "./images/landing_page_img1.png";
import { useForm } from "react-hook-form";

export function LandPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <section>
      <header className="container d-flex justify-content-between align-items-center py-4">
        <img src={logo} alt="" width="20%" className="d-none d-md-block" />
        <img src={logo} alt="" width="40%" className="d-block d-md-none" />
        <a href="/" className="text-decoration-none text-secondary">
          (888) 545-8404
        </a>
      </header>

      <div className="border-top border-secondary py-1 border-bottom">
        <div className="container ">
          <div className="row">
            <div className="col-lg-7 col-md-7 pe-5">
              <h4 className="fw-bold text-capitalize mb-3">
                make more money from google adwords
              </h4>

              <ol className="text-secondary" >
                <li>Cut wasted spend</li>
                <li>Beat your competition</li>
                <li>
                  Find out how much business AdWords is really sending you
                  (includng phone calls)
                </li>
              </ol>

              <p className="text-secondary">
                Our teams AdWords and PPC advertising experts - rankedby Google
                in the top 3% of Google's Partners worldwide - have done this
                for countless small, medium, and lagre businesses around the
                world.
              </p>

              <img src={adwordsImg} alt="adwordsImg" className="img-fluid" />

              <h4 className="fw-bold text-capitalize my-3">
                not using google adwords yet?
              </h4>

              <ol className="text-secondary">
                <li>let's talk about the best strategy for you</li>
                <li>
                  We can research your market and give you broad search volume
                  and cost per click estimates
                </li>
                <li>
                  We'll explain how google AdWords works, and the best way to
                  use it to make you money
                </li>
              </ol>
            </div>
            <div className="col-lg-5 col-md-5 pe-md-0  text-white text-center  ">
              <div className="bg-blue rounded-top-2 p-4">
                <h4 className="text-capitalize fw-bold">
                  request your free evaluation
                </h4>

                <p className="text-center px-lg-4">
                  Find out how to save and make more money from google AdWords -{" "}
                  <span className="text-decoration-underline">
                    {" "}
                    a $500 value!
                  </span>
                </p>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-md-5 py-md-4 p-3 bg-light-blue pb-4 text-start"
              >
                <div className="d-flex flex-column mb-3">
                  <label>Name*</label>
                  <input
                    type="text"
                    className="p-1 rounded border border-1 border-secondary"
                    {...register("Name", { required: true })}
                  />
                </div>

                <div className="d-flex flex-column mb-3">
                  <label>Email*</label>
                  <input
                    type="email"
                    className="p-1 rounded border border-1 border-secondary"
                    {...register("Email", { required: true })}
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <label>Phone Number*</label>
                  <input
                    type="tel"
                    {...register("Phone number", {
                      required: true,
                      maxLength: 10,
                    })}
                    className="p-1 rounded border border-1 border-secondary"
                  />
                </div>

                <div className="d-flex flex-column ">
                  <label>Website</label>
                  <input
                    type="text"
                    {...register("Website", {})}
                    className="p-1 rounded border border-1 border-secondary"
                  />
                </div>
              </form>

              <div className="bg-blue py-4 rounded-bottom-2">
                <button className="px-2 mb-3 fs-5 bg-gradient-or  fw-bold py-2 text-white text-uppercase border border-1 border-black rounded-2">
                  get a free evaluation
                </button>

                <p className="m-0 fw-bold">We Guarantee 100% Grivacy</p>
                <p>Your information will not be shared</p>

                <h5 className="mb-3">Call Us with Questions!</h5>

                <p className="mb-1">Phone: (888) 545-8404</p>
                <p className="mb-1">Hours: 9am-5pm(CT)</p>
                <p>Days: Monday-Friday</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" border-bottom border-secondary">
        <div className="container pb-1 pt-4">
          <h4 className="text-capitalize fw-bold text-center mb-4">
            What our clients are saying
          </h4>

          <div className="row">
            <div className="col-lg-6 col-md-6 pe-md-5 mb-md-4 mb-5 text-secondary">
              <p>
                "<strong>So glad</strong> we choose to pass of our as campaign
                managment to StubGroup. Our account manager is quick to put any
                request n out campaigns into effect, and more importantly, they
                give us the information we need to understand our ad campaigns."
              </p>

              <div className="d-flex align-items-center gap-4">
                <div className="max-wd border border-2 border-black">
                  <img src={client1} alt="client1" className="img-fluid" />
                </div>

                <div>
                  <h5>
                    <strong>Mac Spiller,</strong> Maddox Industrial Transformer
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ps-md-5 mb-md-4 mb-5 text-secondary">
              <p>
                "StubGroup has really done a great job for us. Not only have
                they honed and increased our click marketing efforts, but they
                are <strong>very responsive and quick to help </strong>
                us with questions and need as well. Higly recommended."
              </p>

              <div className="d-flex align-items-center gap-4">
                <div className="max-wd border border-2 border-black">
                  <img src={client2} alt="client1" className="img-fluid" />
                </div>

                <div>
                  <h5>
                    <strong>Daniel Greer,</strong> Marlow White Uniforms
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 pe-md-5 mb-md-4 mb-5 mb-md-0 text-secondary">
              <p>
                "The StubGroup team has really made a difference in my businees
                and <strong>taken the headache out of marketing. </strong> They
                listened to my unique mature of my businees, developed a plan,
                implemented that plan, tweaked that plan, and it works... works
                well!!" ."
              </p>

              <div className="d-flex align-items-center gap-4">
                <div className="max-wd border border-2 border-black">
                  <img src={client3} alt="client1" className="img-fluid" />
                </div>

                <div>
                  <h5>
                    <strong>Greg Bilbro,</strong> Fair Property Buyers
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 ps-md-5 text-secondary">
              <p>
                "I used StubGroup to build my small business. They sought to
                understand the neds of my unique business before designing a
                strategy that would be most effective I saw results as clicks
                translated into actual customers.{" "}
                <strong>I highly recommend StubGroup!</strong>"
              </p>

              <div className="d-flex align-items-center gap-4">
                <div className="max-wd border border-2 border-black">
                  <img src={client4} alt="client1" className="img-fluid" />
                </div>

                <div>
                  <h5>
                    <strong>Lisa Thomas,</strong> Due Rewards Midwifery
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="container text-center pt-4 ">
        <button className="px-2 fs-3 bg-gradient-or  fw-bold py-2 text-white text-uppercase border border-1 border-black rounded-2">
          get a free evaluation
        </button>

        <p className="mt-4 fs-14 text-secondary"> © StubGroup Advertising</p>
      </footer>
    </section>
  );
}
