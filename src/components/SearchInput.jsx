import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const SearchInput = () => {
  const history = useHistory();
  const [query, setQuery] = useState("");

  const onSubmitInput = (e) => {
    e.preventDefault();
    if (query !== "") {
      history.push(`/App/list/${query}`);
    }
  };

  const handleChange = (e) => setQuery(e.target.value);

  return (
    <form className="d-flex">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
      />
      <Button text={"Search"} color={"outline-light"} action={onSubmitInput} />
    </form>
  );
};

export default SearchInput;
