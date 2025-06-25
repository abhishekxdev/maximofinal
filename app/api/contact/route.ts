import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_DqSZhzVP_MKruoqTkirbwRKSAidL48jBq');

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const { name, phone, email, message } = await request.json();

    // Debug: Log the API key (first few characters only)
    const apiKey = process.env.RESEND_API_KEY || 're_DqSZhzVP_MKruoqTkirbwRKSAidL48jBq';
    console.log('API Key available:', apiKey ? `${apiKey.substring(0, 10)}...` : 'No API key');

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Get client IP from request headers
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor || realIp || 'Unknown';

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Name:</strong>
            <span style="margin-left: 10px; color: #333;">${name}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Phone:</strong>
            <span style="margin-left: 10px; color: #333;">${phone}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Email:</strong>
            <span style="margin-left: 10px; color: #333;">${email}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Message:</strong>
            <div style="margin-top: 10px; padding: 15px; background-color: white; border-radius: 5px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; font-size: 14px; color: #6c757d;">
          <strong>Submission Details:</strong><br>
          Date: ${new Date().toLocaleString()}<br>
          IP Address: ${clientIp}
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
          This email was sent from the Maximo Solutions contact form.
        </div>
      </div>
    `;

    console.log('Attempting to send email...');
    console.log('From:', 'Maximo Solutions <onboarding@resend.dev>');
    console.log('To:', ['abhishekxbiz@gmail.com']);
    console.log('Subject:', `New Contact Form Submission from ${name}`);

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['abhishekxbiz@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: htmlContent,
      replyTo: email,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.',
        data 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    });
    
    return NextResponse.json(
      { 
        error: 'Sorry, there was an error sending your message. Please try again or contact us directly.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}