import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <>
      <span style={{ position: "relative" }}>
        <input
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Search..."
          style={{
            padding: "10px",
            border: "none",
            outline: "none",
            borderRadius: "20px",
            fontSize: "16px",
            fontFamily: "Poppins",
            paddingLeft: "20px",
            paddingRight: "50px",
          }}
        />
        <span
          style={{
            position: "absolute",
            right: "5px",
            top: "50%",
            transform: "translateY(-50%)",
            paddingRight:'20px'
          }}
        >
          <img alt="search" src="/icons/searchSecond.svg" />
        </span>
      </span>
    </>
  );
}

export default CarSearch;
