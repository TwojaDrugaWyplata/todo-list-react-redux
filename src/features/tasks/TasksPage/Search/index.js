import React from "react";
import FormInput from "../../Input";
import { Wrapper } from "./styled";
import { key } from "../../searchQueryParameterName";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../../queryParameters";

export default () => {
  const query = useQueryParameter(key);
  const replaceQueryParameter = useReplaceQueryParameter();
  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: key,
      value: target.value.trim() !== "" ? target.value : "",
    });
  };
  return (
    <Wrapper>
      <FormInput
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
