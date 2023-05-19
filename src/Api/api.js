
const data = require('../db.json');
export const BASE_URL = `http://localhost:4000`;

exports.handler = async (event, context) => {
  try {
    const response = {
      statusCode: 200,
      body: JSON.stringify(data),
    };
    return response;
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

export const postConfigure = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };
};

export const patchConfigure = (data) => {
  return {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  };
};

export const deleteConfig = () => {
  return {
    method: "DELETE",
  };
};
