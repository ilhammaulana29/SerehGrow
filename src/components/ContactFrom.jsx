// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, telepon, email, pesan } = formData;
    if (nama && telepon && email && pesan) {
      alert(`Pesan dari ${nama} berhasil dikirim!`);
    } else {
      alert("Silakan lengkapi semua field.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row shadow-lg mx-auto my-8 max-w-4xl">
      <div className="bg-teal-700 text-white p-10 flex flex-col justify-center w-100 md:w-1/3 rounded-md">
        <h2 className="text-2xl font-bold mb-4">SEREHGROW</h2>
        <p className="mb-2">PT CAKRAWALA GLOBAL INFORMATIKA</p>
        <p className="mb-4">
          Jl. Saturnus Sell II No.10, Margasari, Kec. Buahbatu, Kota Bandung,
          Jawa Barat 40286
        </p>
        <p>
          Email:{" "}
          <a href="mailto:serehgrow@gmail.com" className="underline">
            serehgrow@gmail.com
          </a>
        </p>
        <p>
          WhatsApp:{" "}
          <a href="tel:+6282123123129" className="underline">
            +6282123123129
          </a>
        </p>
      </div>
      <form className="bg-white p-10 w-full md:w-2/3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          placeholder="Nama Anda"
          value={formData.nama}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="text"
          name="telepon"
          placeholder="Nomor Telepon Anda"
          value={formData.telepon}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Anda"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <textarea
          name="pesan"
          rows="4"
          placeholder="Beri tahu masukan anda"
          value={formData.pesan}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="bg-teal-700 text-white py-3 px-6 rounded-lg hover:bg-teal-800 transition-colors"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
