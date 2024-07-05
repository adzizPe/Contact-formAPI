import React from "react";
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "338b83cd-d2d0-466b-af12-a9f088ddd562");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
        }
      };
    return(
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>
                    Contact Form
                </h2>
                <div className="input-box">
                    <label >Full name</label>
                    <input type="text" className="field" placeholder="Masukkan nama kamu" name="name" required />
                    </div>
                <div className="input-box">
                    <label >Email</label>
                    <input type="email" className="field" placeholder="Masukkan email kamu" name="email"required />
                    </div>
                <div className="input-box">
                    <label >Pesan</label>
                    <textarea name="pesan"  className="field mess" placeholder="masukkan pesan" required></textarea>
                    </div>
                <button type="submit">Kirim pesan</button>
            </form>
        </section>
    )
}
export default Contact