const title = "Code reviewee tool";
const getTitle = () => title;

const HelloTdd = () => "hello tdd";

const sum = (val1, val2) => val1 + val2;

const queryBuilder = (tableName, columns) => {
  const selectedColumns = columns ? columns.join(", ") : "*";
  return `select ${selectedColumns} from ${tableName}`;
};

module.exports = { getTitle, HelloTdd, sum, queryBuilder };
