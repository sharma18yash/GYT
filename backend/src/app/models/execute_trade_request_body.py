
from pydantic import BaseModel, Field


class ExecuteTradeRequestBody(BaseModel):
    quantity: int = Field(alias="quantity")
    trading_symbol: str = Field(alias="tradingsymbol")