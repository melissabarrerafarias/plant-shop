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


                            {/* <h4 className = "mt-4">Which plant will you be purchasing?</h4> */}
                            <div class="mb-3">
                                <label for="time">Choose a plant: </label>
                                <select name="time" id="time">
                                    <option value="Tulip">Tulip</option>
                                    <option value="Jade Pothos">Jade Pothos</option>
                                    <option value="Scindapsus Picuts">Scindapsus Picuts</option>
                                    <option value="String of Heart">String of Heart</option>
                                    <option value="Philodendron Birkin">Philodendron Birkin</option>
                                    <option value="Red Cherry Philodendron">Red Cherry Philodendron</option>
                                    <option value="Birds Nest Fern">Birds Nest Fern</option>
                                    <option value="Bonsai">Bonsai</option>
                                    <option value="Yellow Daisy">Yellow Daisy</option>
                                    <option value="London Cactus">London Cactus</option>
                                    <option value="Succulent">Succulent</option>
                                    <option value="Monstera Minima">Monstera Minima</option>
                                    <option value="Cast Iron Plant">Cast Iron Plant</option>
                                    <option value="Philodendron Scandens">Philodendron Scandens</option>
                                    <option value="Schefflera">Schefflera</option>
                                    <option value="Golden Pothos">Golden Pothos</option>
                                </select>
                            </div>

                            <button type="submit" class="btn submit-btn mt-3">Order</button>

                        </form>
                    </div>
                    <div className="col-md-6 text-center">
                        <h2>Contact Us</h2>
                        <div className="call-us">
                            <p className="mt-2"> Call us at <a href="tel:999-999-9999">999-999-9999 </a></p>
                            <p> or email us at <a href="mailto:penelopeplants@gmail.com">penelopeplants@gmail.com</a> </p>
                            <h4 className="mb-2 mt-5">Business Hours</h4>
                            <p>Monday-Saturday: 10am - 5pm</p>
                            <p>Sunday: Not Open</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact;