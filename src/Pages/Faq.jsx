import "../style/Faq.css";
import React from "react";
const Faq = () => {
  return (
    <>
      <div className="faq">
        <div className="cont">
          <div className="bg">
            <div className="row">
              <div className="col-12 mb-2 text-centre">
                <h2>FAQ</h2>
              </div>
              <div className="col-12 col-md-6">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Which site is cheapest for flight tickets
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        IRCTC Air is an IATA certified website that offers
                        affordable flight tickets for both domestic and
                        international travel. The website uses an algorithm that
                        compiles flight prices from different airline carriers
                        which passengers can easily choose from.{" "}
                        <code>.accordion-flush</code> class. This is the first
                        item's accordion body.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        How do i check flight seat availability?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        {" "}
                        When you have performed a flight search on IRCTC Air you
                        get a list of all available flights for your desired
                        dates. After checking out prices and entering your
                        personal information you can check flight seat
                        availability by seeing seat map of the plane that you
                        will be getting on for your travel and choose your seat
                        accordingly.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How do i air Tickets?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        It is very simple to book air tickets on IRCTC. Simply
                        enter your arrival and departure destination, number of
                        passengers, travel class and departure date to get a
                        list of all the available flights and click on book now
                        to reserve your preferred flight.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFour">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        How to get a low fare air ticket?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        The best way to get a low fare air ticket is to filter
                        your search on the basis of price which will then
                        refresh the page and display a list of flights with the
                        cheapest one on top and most expensive one on bottom.
                        One can even select the price range to get flights only
                        within that particular price range.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingFive">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        How to get the lowest international flight tickets?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Enter departure and arrival destination, travel dates,
                        travel class and no of passengers to perform a search on
                        IRCTC AIR to get the lowest fare international flights.
                        The IATA certified website compiles a list of all the
                        airline carriers providing flights on the dates you want
                        to fly on..
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingSix">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        Is it worth booking flights online?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        It certainly is worth booking flights online as you get
                        to compare prices of different flights on a single page
                        and compare other features as well.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faq;
