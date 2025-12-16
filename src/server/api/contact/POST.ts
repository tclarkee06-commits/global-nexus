import type { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  try {
    const { name, email, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        success: false 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email format',
        success: false 
      });
    }

    // TODO: Email functionality disabled - configure SMTP in environment variables
    // For now, just log the contact form submission
    console.log('Contact form submission received:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    });

    // Return success (form data is logged but not emailed)
    return res.status(200).json({ 
      success: true,
      message: 'Thank you for your message. We will get back to you soon!'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'Failed to process contact form',
      success: false 
    });
  }
}
