const parseData = (input) =>
  input.data.map((row) =>
    row.reduce(
      (result, curr, index) =>
        (result = { ...result, [input.column[index].name]: curr }),
      {}
    )
  );
export { parseData };
