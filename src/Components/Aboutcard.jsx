import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
    author,
    date,
    tags,
    title,
    subtitle,
    descrp,
    contentLink,
    imageUrl,
    alt,
}) => {
    return (
        <div className={`blog-card ${alt ? "alt" : ""}`}>
            <div className="meta">
                <div
                    className="photo"
                    style={{ backgroundImage: `url(${imageUrl})`, objectFit: "contain" }}
                ></div>
                <ul className="details">
                    <li className="author">
                        <a href="#">{author}</a>
                    </li>
                    <li className="date"></li>
                    {tags &&
                        tags.length > 0 && ( // Check if tags is defined and not an empty array
                            <li className="tags">
                                <ul>
                                    {tags.map((tag, index) => (
                                        <li key={index}>
                                            <a href="#">{tag}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                </ul>
            </div>
            <div className="description">
                <h1 className="desp-title">{title}</h1>
                <p className="description-about">
                    {descrp} 
                </p>
                <div className="read-more">
                    <Link to="/sucess"><button href={contentLink} className="read-more-btn">Read More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
