export const capitalize = (value: String) => {
  return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase())
}
