import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCandidate() {
    const [formData, setFormData] = useState({
        stu_name: "Mohit Saini",
        fath_name: "Jaswant Saini",
        course: "B Tech",
        centre: "IGCSM",
        roll_no: "20090",
        cen_code: "12376",
        cen_address: "ABC Street",
        sem_first: "80",
        sem_second: "89",
        practical: "67",
        viva: "65",
        notebook: "89",
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // On form submission, navigate to the Certificate page and pass the form data
        navigate("/print", { state: { formData } });
    };
    return (
        <>
            <div className="w-full max-w-md mx-auto my-10">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {/* Form Fields */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            STUDENT NAME
                        </label>
                        <input
                            type="text"
                            name="stu_name"
                            value={formData.stu_name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            FATHER NAME
                        </label>
                        <input
                            type="text"
                            name="fath_name"
                            value={formData.fath_name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            COURSE
                        </label>
                        <input
                            type="text"
                            name="course"
                            value={formData.course}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            CENTRE NAME
                        </label>
                        <input
                            type="text"
                            name="centre"
                            value={formData.centre}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            ROLL NO
                        </label>
                        <input
                            type="text"
                            name="roll_no"
                            value={formData.roll_no}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            CEN. CODE
                        </label>
                        <input
                            type="text"
                            name="cen_code"
                            value={formData.cen_code}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            CEN. ADDRESS
                        </label>
                        <input
                            type="text"
                            name="cen_address"
                            value={formData.cen_address}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            SEMESTER - FIRST MARKS
                        </label>
                        <input
                            type="text"
                            name="sem_first"
                            value={formData.sem_first}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            SEMESTER - SECOND MARKS
                        </label>
                        <input
                            type="text"
                            name="sem_second"
                            value={formData.sem_second}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            PRACTICAL MARKS
                        </label>
                        <input
                            type="text"
                            name="practical"
                            value={formData.practical}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            VIVA MARKS
                        </label>
                        <input
                            type="text"
                            name="viva"
                            value={formData.viva}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            NOTE-BOOK MARKS
                        </label>
                        <input
                            type="text"
                            name="notebook"
                            value={formData.notebook}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {/* Add the rest of the form fields similarly */}
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddCandidate;