import { useEffect, React, useState } from "react";
import './sheets/Portfolio.css'
import Navbar from './common/Navbar'
import PortfolioEntry from './portfolio/entry'
import Footer from "./common/Footer";

function Portfolio() {
    const [portfolios, updatePortfolios] = useState(null)

    document.body.style.overflow = "auto";
    useEffect(() => {
        const fetchPortfolioEntries = async () => {
            const response = await fetch('/api/portfolio')
            if (response.ok) {
                var json = await response.json()
                json.sort((a, b) => b.creationdate - a.creationdate);
                updatePortfolios(json)
            } else {
                console.error("Failed to fetch portfolios", response.statusText);
            }
        }

        fetchPortfolioEntries()
    }, [])

    return (
        <>
            <Navbar
                selected={'portfolio'}
            />

            <div className="aboutcontainer">
                <h1 className="title">My Work
                    <div className="aurora">
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                        <div className="aurora__item"></div>
                    </div>
                </h1>
                
                <p className="portfoliodescription">
                    This section is managed by a MongoDB Atlas database
                </p>

                <div className="portfolios">
                    {portfolios && portfolios.map((entry) => (
                        <PortfolioEntry key={entry._id} entry={entry} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Portfolio;