import React from 'react';
import UnixTimeConverter from './UnixTimeConverter';

// const SkillsToElements = ({ skills }) => {
//     return (
//         <li>{skills}</li>
//     )
// }

const PortfolioEntry = ({ entry }) => {
    var skills = entry.skills
    skills = JSON.parse(skills)
    var counter = 0

    const startDate = <UnixTimeConverter unixTimestamp={entry.creationdate} />;
    const endDate = entry.finishdate === 0 ? 'Present' : <UnixTimeConverter unixTimestamp={entry.finishdate} />;

    const contentParagraphs = entry.content.split('\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));
    var href = '#'
    var title = ''
    entry.pname.split('\n').forEach((portion, index) => {
        console.log(index, portion)
        if (index === 1) {
            href = portion
        } else {
            title = portion
        }
    })

    return (
        <>
            <div className="blog-container">
                <div className="blog-body">
                    <div className="blog-title">
                        <h1><a href={href}>{title}</a></h1>
                    </div>
                    <div className="blog-summary">
                        {contentParagraphs}
                    </div>
                    <div className="blog-tags">
                        <ul>
                            {skills && skills.map( (skill) => {
                                counter++;
                                return <li key={counter}><p>{skill}</p></li>
                            })}
                        </ul>
                    </div>
                </div>

                <div className="blog-footer">
                    <ul>
                        <li className="published-date">
                            {startDate} - {endDate}
                        </li>
                    </ul>
                </div>

            </div>
        </>

    )
}

export default PortfolioEntry