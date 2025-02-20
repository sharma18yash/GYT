
from pydantic import BaseModel, Field


class ExecuteTradeRequestBody(BaseModel):
    trading_symbol: str = Field(alias="tradingsymbol")
    quantity: int = Field(alias="quantity")