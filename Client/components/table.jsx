'use client'
import React, { useEffect } from 'react'


export default function table() {

    useEffect(async () => {
        try {
            const res = await fetch('http://localhost:5000/api/getEntries');
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    })


    const handleSendEmail = async () => {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ selectedRowsData })
            });

            if (response.ok) {
                alert('Email sent successfully');
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send email');
        }
    }


    return (
        <div>
            <table className="table table-light table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Hobbies</th>
                        <th scope="col">chk</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele) => {
                            <tr key={ele._id}>
                                <th scope="row">{ele.index}</th>
                                <td>{ele.name}</td>
                                <td>{ele.phoneNumber}</td>
                                <td>{ele.email}</td>
                                <td>{ele.hobbies}</td>
                                <td>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="checkboxNoLabel"
                                        defaultValue=""
                                        aria-label="..."
                                        onChange={handleSendEmail}
                                    />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}



