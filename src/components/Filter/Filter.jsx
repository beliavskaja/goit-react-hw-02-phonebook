import React from "react";
import PropTypes from "prop-types";
import { FilterSection, FindTitle, FindInput } from "./Filter.styled";

const Filter = ({ value, onChangeFilter }) => (
  <FilterSection>
    <FindTitle>Find contacts by name</FindTitle>
    <FindInput name="filter" onChange={onChangeFilter} value={value} />
  </FilterSection>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
