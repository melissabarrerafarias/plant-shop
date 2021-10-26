import React from 'react';
import '../contact.css'
function Contact() {
    return (
        <main className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="mb-3 text-center">Order and pick up your plant!</h2>
                        <form>
                            <div class="mb-3">
                                <input placeholder="Full Name" type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <input placeholder="Email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label for="day">Choose a day: </label>
                                <select name="day" id="day">
                                    <option value="Monday">Monday</option>
                                    <option value="Tuesday">Tuesday</option>
                                    <option value="Wednesday">Wednesday</option>
                                    <option value="Thursday">Thursday</option>
                                    <option value="Friday">Friday</option>
                                    <option value="Saturday">Saturday</option>
                                </select>
                            </div>
                            <div class="mb-3">
                                <label for="time">Choose a time: </label>
                                <select name="time" id="time">
                                    <option value="10am">10am</option>
                                    <option value="10:30am">10:30 am</option>
                                    <option value="11:00am">11:00 am</option>
                                    <option value="11:30am">11:30 am</option>
                                    <option value="12:00pm">12:00 pm</option>
                                    <option value="12:30pm">12:30 pm</option>
                                    <option value="1:00pm">1:00 pm</option>
                                    <option value="1:30pm">1:30 pm</option>
                                    <option value="2:00pm">2:00 pm</option>
                                    <option value="2:30pm">2:30 pm</option>
                                    <option value="3:00pm">3:00 pm</option>
                                    <option value="3:30pm">3:30 pm</option>
                                    <option value="4:00pm">4:00 pm</option>
                                    <option value="4:30pm">4:30 pm</option>
                                    <option value="5:00pm">5:00 pm</option>
                                </select>
                            </div>

                            <h4>Which plant(s) will you be purchasing?</h4>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Tulip</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Jade Pothos</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Scindapsus Picuts</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">String of Heart</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Philodendron Birkin</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Red Cherry Philodendron</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Birds Nest Fern</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Bonsai</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Yellow Daisy</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">London Cactus</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Succulent</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Monstera Minima</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Cast Iron Plant</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Philodendron Scandens</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Schefflera</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">Golden Pothos</label>
                            </div>
                            <div className="text-center mb-5">
                                <button type="submit" class="btn submit-btn mt-3">Submit Form</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 text-center">
                        <h2>Contact Us</h2>
                        <div className="call-us">
                            <p className = "mt-2"> Call us at <a href="tel:999-999-9999">999-999-9999 </a></p>
                            <p> or email us at <a href="mailto:penelopeplants@gmail.com">penelopeplants@gmail.com</a> </p>
                            <h4 className="mb-2 mt-5">Business Hours</h4>
                            <p>Monday-Saturday: 10am - 5pm</p>
                            <p>Sunday: Not Open</p>
                        </div>

                        <div className="hours">

                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;