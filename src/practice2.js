const inject = (items, sections) => {
  let result = [...items];
  const orderedSections = sections.sort(
    (objA, objB) => objB.index - objA.index
  );
  orderedSections.forEach((s) => result.splice(s.index, 0, s.content));
  return result;
};
export { inject };
