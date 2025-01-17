import numpy as np
import json
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences

# Load Dataset
with open("data.json", "r") as f:
    data = json.load(f)

# Prepare Data
questions = [item["question"] for item in data]
answers = [item["answer"] for item in data]

# Tokenize Data
tokenizer = Tokenizer()
tokenizer.fit_on_texts(questions + answers)
word_index = tokenizer.word_index

# Convert Text to Sequences
max_len = 20
input_sequences = pad_sequences(tokenizer.texts_to_sequences(questions), maxlen=max_len)
output_sequences = pad_sequences(tokenizer.texts_to_sequences(answers), maxlen=max_len)

# Define Model
vocab_size = len(word_index) + 1
embedding_dim = 128
model = Sequential([
    Embedding(vocab_size, embedding_dim, input_length=max_len),
    LSTM(128, return_sequences=True),
    LSTM(64),
    Dense(64, activation="relu"),
    Dense(vocab_size, activation="softmax")
])

model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])

# Train Model
output_sequences = np.expand_dims(output_sequences[:, 0], -1)  # Adjust target shape
model.fit(input_sequences, output_sequences, epochs=100, batch_size=8)

# Save Model
model.save("chatbot_model.h5")

# Save Tokenizer
with open("tokenizer.json", "w") as f:
    json.dump(tokenizer.to_json(), f)

print("Model and tokenizer saved!")
