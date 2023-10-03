import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import ElectricMeterOutlinedIcon from "@mui/icons-material/ElectricMeterOutlined";
import MotionPhotosAutoOutlinedIcon from "@mui/icons-material/MotionPhotosAutoOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Pagination from material ui
import Pagination from "@mui/material/Pagination";

function Cards() {
  const { cars, searchTerm } = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      cars: filteredCars,
    };
  });

  const { page } = useParams(); // Get current page from URL params
  const currentPage = parseInt(page) || 1; // Parse page number, default to 1
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCars = cars.slice(indexOfFirstItem, indexOfLastItem);

  // PAgination
  const navigate = useNavigate();

  const handlePageChange = (newPage) => {
    navigate(`/page/${newPage}`); // Update URL when page changes
  };

  // Placeholder data for demonstration
  const totalCars = 100; // Total number of cars
  const carsPerPage = 6; // Number of cars per page
  const totalPages = Math.ceil(totalCars / carsPerPage); // Calculate total pages

  // Calculate the starting and ending index of cars for the current page
  const startIndex = (currentPage - 1) * carsPerPage + 1;
  const endIndex = Math.min(startIndex + carsPerPage - 1, totalCars);

  // Render car components based on the current page
  const carComponents = [];
  for (let i = startIndex; i <= endIndex; i++) {
    carComponents.push(<div key={i}>Car {i}</div>); // Replace with your car component logic
  }

  // Pagination logic for Next and Previous buttons
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;
  console.log(currentCars, indexOfFirstItem, indexOfFirstItem, totalCars);

  const renderedCars = () => {
    return (
      <Grid container spacing={2}>
        {currentCars.map((car) => (
          <Grid
            item
            xs={12}
            md={4}
            sm={6}
            key={car.id}
            style={{ marginTop: "20px" }}
          >
            <Card style={{ borderRadius: "20px", background: "#eaeef6" }}>
              <CardContent>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="220"
                  image={car.image}
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "5px",
                    marginBottom: "20px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      marginTop: "10px",
                      fontWeight: "500",
                      fontFamily: "Poppins",
                    }}
                  >
                    {car.name}
                  </Typography>
                  <button
                    style={{
                      textDecoration: "none",
                      border: "2px dotted #4899ec",

                      borderRadius: "10px",
                      fontSize: "14px",
                      fontFamily: "Poppins",

                      fontWeight: "400",
                    }}
                  >
                    {car.date}
                  </button>
                </div>
                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Left Div */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignContent: "center" }}>
                      <PeopleAltOutlinedIcon
                        style={{ color: "#62a8ee", marginRight: "5px" }}
                      />
                      <Typography
                        style={{ color: "gray", fontFamily: "Poppins" }}
                      >
                        {car.people} People
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginTop: "15px",
                      }}
                    >
                      <ElectricMeterOutlinedIcon
                        style={{ color: "#62a8ee", marginRight: "5px" }}
                      />
                      <Typography
                        style={{ color: "gray", fontFamily: "Poppins" }}
                      >
                        {car.average}/ 1-litre
                      </Typography>
                    </div>
                  </div>

                  {/* Right Div */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignContent: "center" }}>
                      <LocalGasStationOutlinedIcon
                        style={{ color: "#62a8ee", marginRight: "5px" }}
                      />
                      <Typography
                        style={{ color: "gray", fontFamily: "Poppins" }}
                      >
                        {car.type}
                      </Typography>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginTop: "15px",
                      }}
                    >
                      <MotionPhotosAutoOutlinedIcon
                        style={{ color: "#62a8ee", marginRight: "5px" }}
                      />
                      <Typography
                        style={{ color: "gray", fontFamily: "Poppins" }}
                      >
                        {car.start}
                      </Typography>
                    </div>
                  </div>
                </div>
                <Divider
                  style={{
                    width: "100%", // Set width to 100%
                    border: "1px solid #C5C5C5",
                    margin: "10px 0", // Adjust margin
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="h6" style={{ fontFamily: "Poppins" }}>
                      {car.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      style={{
                        fontFamily: "Poppins",
                        marginLeft: "5px",
                        fontWeight: "500",
                      }}
                    >
                      / month
                    </Typography>
                  </div>
                  <div style={{ display: "flex", alignContent: "center" }}>
                    <Avatar
                      variant="rounded"
                      style={{ background: "#daeafa", borderRadius: "10px" }}
                    >
                      <FavoriteBorderOutlinedIcon
                        style={{ color: "#87bff2" }}
                      />
                    </Avatar>
                    <Button
                      variant="contained"
                      size="small"
                      style={{
                        textTransform: "none",
                        fontSize: "14px",
                        fontWeight: "500",
                        fontFamily: "Poppins",
                        marginLeft: "10px",
                        borderRadius: "10px",
                      }}
                    >
                      Rent Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <>
      {renderedCars()}
      <Card
        style={{
          marginTop: "40px",
          borderRadius: "20px",
          background: "#ebeff5",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontFamily: "Poppins", marginTop: "10px" }}>
            {indexOfFirstItem + 6} from {totalCars}
          </Typography>
          <div>
            {showPrevious && (
              <button
                style={{
                  border: "none",
                  background: "white",
                  marginLeft: "15px",
                  padding: "5px",
                  borderRadius: "10px",
                  marginTop: "10px",
                  cursor:'pointer'
                }}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <ArrowBackIcon style={{ height: "15px", width: "20px" }} />
              </button>
            )}
            {[...Array(10).keys()].map((number) => {
              const pageNumber = number + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  style={{
                    fontWeight: pageNumber === currentPage ? "bold" : "normal",
                    border: "none",
                    background: "white",
                    marginLeft: "15px",
                    padding: "5px 10px 5px 10px",
                    borderRadius: "10px",
                    marginTop: "10px",
                    cursor: 'pointer'
                  }}
                >
                  {pageNumber}
                </button>
              );
            })}
            {showNext && (
              <button
                style={{
                  border: "none",
                  background: "white",
                  marginLeft: "10px",
                  borderRadius: "10px",
                  padding: "5px",
                  marginTop: "10px",
                  cursor:'pointer'
                }}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <ArrowForwardIcon style={{ height: "15px", width: "20px" }} />
              </button>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Cards;
