# Use an official lightweight Python image.
FROM python:3.9-slim

# Set the working directory inside the container.
WORKDIR /app

# Copy the requirements file and install Python dependencies.
COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copy your source code into the container.
COPY src/ ./src/

# Change directory to where your FastAPI app is located.
WORKDIR /app/src/app

# Set environment variables.
# Note: For production, consider injecting secrets at runtime.
ENV api_key=fwy2sz5ujjjctqxb
ENV api_secret=p9pkueo0oco6350zajziensk8a645j6d

# Expose the port your application will run on.
EXPOSE 8080

# Define the command to run your application.
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8080"]
