export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { templateType, userInput } = req.body;
      
      // Call a Python script using Spacy and Meta Llama to process the input
      const message = await generateMessage(templateType, userInput);
  
      res.status(200).json({ message });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  