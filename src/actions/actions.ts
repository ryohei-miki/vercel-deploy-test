'use server';

export async function submitMessage(formData: FormData) {
  const message = formData.get('message');
  
  try {
    const response = await fetch(`${process.env.API_URL ?? 'http://localhost:3000'}/hello`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    
    if (!response.ok) {
      throw new Error('API request failed');
    }
    
    const data = await response.json();
    console.log('API response:', data);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
} 