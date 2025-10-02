import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 })
    }

    // Validate Pinterest URL
    const isValidPinterestUrl = url.includes('pinterest.com') || url.includes('pin.it/')
    if (!isValidPinterestUrl) {
      return NextResponse.json({ error: 'Invalid Pinterest URL' }, { status: 400 })
    }

    // Extract pin ID from URL
    let pinId = ''
    if (url.includes('pin.it/')) {
      pinId = url.split('pin.it/')[1].split('/')[0]
    } else if (url.includes('pinterest.com/pin/')) {
      pinId = url.split('pinterest.com/pin/')[1].split('/')[0]
    }

    if (!pinId) {
      return NextResponse.json({ error: 'Could not extract pin ID from URL' }, { status: 400 })
    }

    // Fetch Pinterest page to extract video URL
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch Pinterest page' }, { status: 400 })
    }

    const html = await response.text()
    
    // Extract video URL from HTML
    const videoMatch = html.match(/"(https:\/\/v\.pinimg\.com\/[^"]*\.mp4[^"]*)"/)
    const titleMatch = html.match(/<title>([^<]*)<\/title>/)
    const imageMatch = html.match(/"(https:\/\/i\.pinimg\.com\/[^"]*\.jpg[^"]*)"/)

    if (!videoMatch) {
      return NextResponse.json({ error: 'No video found in this Pinterest post' }, { status: 400 })
    }

    const videoUrl = videoMatch[1]
    const title = titleMatch ? titleMatch[1].replace(' | Pinterest', '').trim() : 'Pinterest Video'
    const thumbnail = imageMatch ? imageMatch[1] : ''

    // Get video metadata
    const videoResponse = await fetch(videoUrl, { method: 'HEAD' })
    const contentLength = videoResponse.headers.get('content-length')
    const size = contentLength ? `${(parseInt(contentLength) / 1024 / 1024).toFixed(1)} MB` : 'Unknown'

    return NextResponse.json({
      title,
      thumbnail,
      duration: 'Unknown', // Pinterest doesn't provide duration in metadata
      size,
      downloadUrl: videoUrl,
      filename: `${title.replace(/[^a-zA-Z0-9]/g, '_')}_${pinId}.mp4`
    })

  } catch (error) {
    console.error('Pinterest download error:', error)
    return NextResponse.json(
      { error: 'Failed to process Pinterest URL' }, 
      { status: 500 }
    )
  }
}
