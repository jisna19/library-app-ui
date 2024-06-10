import React, { useState } from 'react'
import NavBar from './NavBar'

const View = () => {
    const [data, changedata] = useState([
        {
            "title": "wings of fire",
            "authorName": "Abdul kalam",
            "price": "500",
            "edition": "3rd"
        },
        {
            "title": "Ramayan",
            "authorName": "Ashok",
            "price": "700",
            "edition": "1st"
        },
        {
            "title": "The Hobbit",
            "authorName": "J.R.R",
            "price": "550",
            "edition": "3rd"
        },
        {
            "title": "Adventures",
            "authorName": "Mark",
            "price": "560",
            "edition": "4th"
        }
    ])
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">index</th>
                                        <th scope="col">title</th>
                                        <th scope="col">authorName</th>
                                        <th scope="col">price</th>
                                        <th scope="col">edition</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map(
                                            (value,index)=>{
                                                return <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{value.title}</td>
                                                <td>{value.authorName}</td>
                                                <td>{value.price}</td>
                                                <td>{value.edition}</td>
                                            </tr>
                                            }
                                        )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}

            export default View