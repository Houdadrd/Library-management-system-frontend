import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { IoIosPricetags } from "react-icons/io";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../../authContext";

const ViewDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const { authToken, userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/GetBookId/${id}`
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const headers = {
    bookid: id,
    userid: userId,
    authorization: `Bearer ${authToken}`,
  };

  const handleFavorite = async () => {
    try {
      const response = await axios.put(
        "http://localhost:5000/api/AddBookToFavorite",
        {},
        { headers }
      );
      console.log(response.data.message);
      navigate("/favorite");
    } catch (error) {
      console.error("Error adding to favorite:", error);
    }
  };

  const handleCart = async () => {
    if (data.stock > 0) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/AddToCart",
          {},
          { headers }
        );
        console.log(response.data.message);
        navigate("/cart");
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  return (
    <div className="viewDetail-container">
      <div className="book">
        <div className="book-container">
          {data.image ? (
            <img
              src={`http://localhost:5000/uploads/${data.image}`}
              alt="Book cover"
            />
          ) : (
            <p>Loading image...</p>
          )}
        </div>

        {data.stock === 0 && (
          <p className="out-of-stock-message">Out of Stock</p>
        )}

        {/* {data.stock <= 5 && (
          <p className="stock-exist">
            Fewer than {data.stock} books available
          </p>
        )} */}
      </div>

      <div className="icon-btn">
        <button
          className={`cart-btn ${data.stock === 0 ? "out-of-stock" : ""}`}
          onClick={handleCart}
          disabled={data.stock === 0}
        >
          <FaShoppingCart />
        </button>

        <button className="heart-btn" onClick={handleFavorite}>
          <FaStar />
        </button>
      </div>

      <div className="detailsBook">
        <h1 className="title_container">{data.title}</h1>
        <p className="author-container">By {data.author}</p>
        <p className="desc-container">{data.desc}</p>
        <p className="language">
          <GrLanguage className="grlg" />
          {data.language}
        </p>
        <p className="price">
          {" "}
          <IoIosPricetags className="prc" /> {data.price} DH
        </p>
      </div>
    </div>
  );
};

export default ViewDetails;
