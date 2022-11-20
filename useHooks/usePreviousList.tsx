import usePrevious from "./usePrevious";

function usePreviousList<T>(items: T[]): T[] {
  const list: T[] = [];
  items.forEach((item: T) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    list.push(usePrevious<T>(item));
  });

  return list;
}

export default usePreviousList;
