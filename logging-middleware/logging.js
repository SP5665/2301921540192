const LOG_API_URL = "YOUR_LOG_API_URL";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJjc2RzMjMwNDdAZ2xiaXRtLmFjLmluIiwiZXhwIjoxNzgyNDU2ODE5LCJpYXQiOjE3ODI0NTU5MTksImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJkOGQ5NWVlZS1lZTgzLTQ4ZWItOTVmOS0zMjZlNmQ0OGQ5ODEiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzcmlzaHRpIHBhbmRleSIsInN1YiI6Ijk0ZmJkN2YxLTM5NWYtNDAxNC05NTAwLTU3OWIzYWNlOWQxYSJ9LCJlbWFpbCI6ImNzZHMyMzA0N0BnbGJpdG0uYWMuaW4iLCJuYW1lIjoic3Jpc2h0aSBwYW5kZXkiLCJyb2xsTm8iOiIyMzAxOTIxNTQwMTkyIiwiYWNjZXNzQ29kZSI6Inh4a0puayIsImNsaWVudElEIjoiOTRmYmQ3ZjEtMzk1Zi00MDE0LTk1MDAtNTc5YjNhY2U5ZDFhIiwiY2xpZW50U2VjcmV0IjoiWmF5dVZ4VGRZbnRmZGRkYyJ9.NlDuI2O2Lj8mH8gzIan54xMRMb2hsyyisWDCuxMsS8g";

export async function log(stack, level, pkg, message) {
  try {
    const response = await fetch(LOG_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Logging failed (${response.status})`);
    }

    return await response.json();
  } catch(error) {
    console.error("Logger Error:", error);
  }

}