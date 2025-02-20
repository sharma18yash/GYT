interface ExecuteTradeRequestBody {
    tradingSymbol: string;
    quantity: number;
  }
  
  export const executeTrade = async (requestBody: ExecuteTradeRequestBody) => {
    try {
      const response = await fetch("https://gyt.fly.dev/zerodha-kite/trade/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
  
      if (!response.ok) {
        throw new Error(`API call failed: ${response.status} ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error executing trade:", error);
      throw error;
    }
  };
  