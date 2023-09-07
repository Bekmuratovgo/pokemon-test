
export const A_Z = 'A-z';
export const Z_A = 'Z-a';


export const regexForUrlId = /\/(\d+)\/$/;


export const sortBy = (arr, type) => {
  const sortedObjects = [...arr.results];

  return sortedObjects.sort((a, b) => {
    const valueA = a.name.toUpperCase();
    const valueB = b.name.toUpperCase();

    if (type === A_Z) {
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }

    } else {
      if (valueA > valueB) {
        return -1;
      }
      if (valueA < valueB) {
        return 1;
      }
    }
    return 0; // Если имена равны
  });
}