
export const groupByCategory = (arr:any[]) => {
    const data=  arr.reduce((result, item) => {
      const category = item.category;
      if (!result[category]) {
        result[category] = [];
      }
      result[category].push(item);
      return result;
    }, {});
    return data
 };

 export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }