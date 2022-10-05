import _ from 'lodash';

const allowedEntities = ['persons', 'groups'];

export const sortByFrequency = (data) => {
  Object.keys(data).forEach((objectType) => {
    data[objectType] = _.orderBy(data[objectType], 'frequency', 'desc');
  });
  return data;
};

export const filterByQuery = (query, data) => {
  Object.keys(data).forEach((objectType) => {
    data[objectType] = data[objectType].filter((item) => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.email?.toLowerCase().includes(query.toLowerCase())
      );
    });
  });
};

export const flattenForNavigation = (data) => {
  const result = [];
  Object.keys(data).forEach((objectType) => {
    if (allowedEntities.includes(objectType)) {
      data[objectType].forEach((a, index) => {
        a.id = `${objectType}-${index}`;
      });
      result.push(...data[objectType]);
    }
  });
  return result;
};

export const groupByType = (data) => {
  const result = _.groupBy(data, 'itemType');
  return result;
};
