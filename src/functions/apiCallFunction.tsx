
interface APICallOptions {
  type?: "POST" | "PUT" | "DELETE" | "GET";
  url: string;
  data?: unknown;
  thenFn?: (res: { status: number; data: unknown }) => void;
  catchFn?: (err: unknown) => void;
  finallyFn?: () => void;
}

export const callApi = async (APIOptions: APICallOptions) => {
  const {
    type = "POST",
    url,
    data,
    thenFn,
    catchFn,
    finallyFn,
  } = APIOptions;

  try {
    const response = await fetch(url, {
      method: type,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: type !== "GET" ? JSON.stringify(data) : undefined,
    });

    const responseData = await response.json();

    if (!response.ok) {
      void (catchFn && catchFn(responseData));
      void console.error("API Error:", responseData);
      return;
    }

    void (thenFn && thenFn({ status: response.status, data: responseData }));
    return responseData;
  } catch (err) {
    void (catchFn && catchFn(err));
    void console.error("API Error:", err);
  } finally {
    void (finallyFn && finallyFn());
  }
};
