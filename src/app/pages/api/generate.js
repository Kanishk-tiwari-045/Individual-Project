import { spawn } from 'child_process';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { messageType } = req.body;

    const pythonProcess = spawn('python', ['./generate.py', messageType]);

    pythonProcess.stdout.on('data', (data) => {
      res.status(200).json({ message: data.toString() });
    });

    pythonProcess.stderr.on('data', (data) => {
      res.status(500).json({ error: data.toString() });
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
