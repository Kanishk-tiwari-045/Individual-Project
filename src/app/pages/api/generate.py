from transformers import pipeline

# Initialize the text generation pipeline with a model
generator = pipeline('text-generation', model='gpt2')

def generate_message(message_type):
    # Generate a message based on the input type
    prompt = f"Write a professional {message_type} message."
    result = generator(prompt, max_length=50, num_return_sequences=1)
    return result[0]['generated_text']

if __name__ == "__main__":
    import sys
    message_type = sys.argv[1]
    print(generate_message(message_type))
