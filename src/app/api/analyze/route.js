export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const response = await fetch('http://localhost:5000/analyze', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Backend analysis failed');

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error('Analysis error:', error);
    return Response.json(
      { error: 'Analysis failed' },
      { status: 500 }
    );
  }
} 