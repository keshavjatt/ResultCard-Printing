import React from "react";
import { useLocation } from "react-router-dom";
import './certificate.css';

function Certificate() {
    const location = useLocation();
    const formData = location.state?.formData || {};

    // Function to get the current date in DD/MM/YYYY format
    const getCurrentDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
    };

    // Function to calculate the total marks obtained
    const calculateTotal = () => {
        const total = parseInt(formData.sem_first || 0) +
            parseInt(formData.sem_second || 0) +
            parseInt(formData.practical || 0) +
            parseInt(formData.viva || 0) +
            parseInt(formData.notebook || 0);
        return total;
    };

    // Function to calculate the percentage
    const calculatePercentage = (total) => {
        const totalMaxMarks = 500; // 5 subjects, each with a max of 100
        return ((total / totalMaxMarks) * 100).toFixed(2); // Percentage with 2 decimal places
    };

    // Function to determine the grade
    const determineGrade = (percentage) => {
        if (percentage >= 75) return "A";
        if (percentage >= 60) return "B";
        if (percentage >= 35) return "C";
        return "D";
    };

    // Function to determine the result
    const determineResult = (percentage) => {
        return percentage >= 35 ? "PASS" : "FAIL";
    };

    // Calculate values
    const totalMarks = calculateTotal();
    const percentage = calculatePercentage(totalMarks);
    const grade = determineGrade(percentage);
    const result = determineResult(percentage);

    return (
        <>
            <div className="certificate-container">
                <div className="certificate">
                    <div className="certificate-body">
                        <h1 className="certificate-title" style={{ textDecoration: 'underline' }}>STATEMENT OF MARKS</h1>
                        <div className="left">
                            <p><strong>STUDENT NAME: </strong>{formData.stu_name}</p>
                            <p><strong>FATHER NAME: </strong>{formData.fath_name}</p>
                            <p><strong>COURSE: </strong>{formData.course}</p>
                            <p><strong>CENTRE NAME: </strong>{formData.centre}</p>
                        </div>
                        <div className="right">
                            <p><strong>ROLL NO: </strong>{formData.roll_no}</p>
                            <p><strong>CEN. CODE: </strong>{formData.cen_code}</p>
                            <p><strong>CEN. ADDRESS: </strong>{formData.cen_address}</p>
                        </div>

                        {/* Table Section */}
                        <table className="marks-table">
                            <thead>
                                <tr>
                                    <th>PAPER</th>
                                    <th colSpan={2}>SCHEME OF MARKS</th>
                                    <th>MARKS OBTAINED</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>Min.</th>
                                    <th>Max.</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        SEMESTER - FIRST
                                        <br />
                                        (Office Automation, Internet, E-learning, Manual Accounting, Computer Accounting, Report Generation, Inventory Control)
                                    </td>
                                    <td>35</td>
                                    <td>100</td>
                                    <td>{formData.sem_first}</td>
                                </tr>
                                <tr>
                                    <td>
                                        SEMESTER - SECOND
                                        <br />
                                        (Tax Management, Cost Accounting, Stock Exchange, Mutual Fund & ULIP, Interview Workshop)
                                    </td>
                                    <td>35</td>
                                    <td>100</td>
                                    <td>{formData.sem_second}</td>
                                </tr>
                                <tr>
                                    <td>PRACTICAL</td>
                                    <td>35</td>
                                    <td>100</td>
                                    <td>{formData.practical}</td>
                                </tr>
                                <tr>
                                    <td>VIVA</td>
                                    <td>35</td>
                                    <td>100</td>
                                    <td>{formData.viva}</td>
                                </tr>
                                <tr>
                                    <td>NOTEBOOK</td>
                                    <td>35</td>
                                    <td>100</td>
                                    <td>{formData.notebook}</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Results Section */}
                        <div className="results-section">
                            <div className="results-row">
                                <p><strong>TOTAL: </strong>{totalMarks}</p>
                                <p><strong>PERCENTAGE: </strong>{percentage}%</p>
                                <p><strong>GRADE: </strong>{grade}</p>
                                <p><strong>RESULT: </strong>{result}</p>
                                <p><strong>DATE OF ISSUE: </strong>{getCurrentDate()}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Certificate;