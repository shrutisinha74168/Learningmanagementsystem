import axios from "axios";

const API_URL = "http://localhost:5000/api/payments";

export const makePayment = async (courseId, amount, token) => {
  const { data } = await axios.post(
    `${API_URL}/checkout`,
    { courseId, amount },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};
