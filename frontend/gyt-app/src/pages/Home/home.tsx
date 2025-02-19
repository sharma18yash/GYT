import { SetStateAction, useState } from "react";
import { executeTrade } from "../../services/tradeService";
import { 
  Container, Card, CardContent, Typography, TextField, MenuItem, Button, CircularProgress, Box 
} from "@mui/material";

const tradeSymbols = ["INFY", "IDBI", "TSLA", "AMZN", "MSFT"];

export default function HomePage() {
  const [tradingsymbol, setTradingsymbol] = useState(tradeSymbols[0]);
  const [quantity, setQuantity] = useState<number | "">("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!quantity || quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    setLoading(true);

    try {
      const response = await executeTrade({ tradingsymbol, quantity });
      console.log("Trade executed successfully:", response);
      alert("Trade executed successfully! Your order ID is: " + response.order_id);
    } catch (error) {
      alert("Failed to execute trade. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Trade Execution
          </Typography>

          <Box mb={2}>
            <TextField
              select
              fullWidth
              label="Trading Symbol"
              value={tradingsymbol}
              onChange={(e: { target: { value: SetStateAction<string>; }; }) => setTradingsymbol(e.target.value)}
            >
              {tradeSymbols.map((symbol) => (
                <MenuItem key={symbol} value={symbol}>
                  {symbol}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box mb={2}>
            <TextField
              fullWidth
              type="number"
              label="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              placeholder="Enter quantity"
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Submit Trade"}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
