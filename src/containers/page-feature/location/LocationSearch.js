import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import provinceVn from "../../../asset/provinceVN";
import { useDispatch, useSelector } from "react-redux";
import { setProvince } from "../../../features/wether/weatherSlice";
import { fetchWeather } from "../../../rootReducers";
import { Row, Container } from "react-bootstrap";

const LocationSearch = () => {
  const dispatch = useDispatch();
  const optionDefault = useSelector((state) => state.weather.provinceVn);
  const [selected, setSelected] = useState(JSON.stringify(optionDefault));
  const handleSelectOption = (event) => {
    const valueChoose = event.target.value;
    setSelected(valueChoose);
    dispatch(setProvince(valueChoose));
    dispatch(fetchWeather(JSON.parse(valueChoose)));
  };

  return (
    <Container>
      <Row>
        <Form.Select
          select={selected}
          defaultValue={selected}
          onChange={handleSelectOption}
        >
          {provinceVn.map((item, key) => {
            return (
              <option key={key} value={JSON.stringify(item)}>
                {item.name}
              </option>
            );
          })}
        </Form.Select>
      </Row>
    </Container>
  );
};

export default LocationSearch;
