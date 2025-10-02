import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 72,
          background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #60a5fa 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '20%',
          position: 'relative',
        }}
      >
        {/* Sam4You Logo Representation - High Quality */}
        <div
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Upper curved shape - larger and more detailed */}
          <div
            style={{
              position: 'absolute',
              width: '80px',
              height: '40px',
              background: 'linear-gradient(45deg, #1e40af, #3b82f6)',
              borderRadius: '50% 50% 0 0',
              transform: 'rotate(-15deg)',
              top: '10px',
              left: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          />
          {/* Lower curved shape - larger and more detailed */}
          <div
            style={{
              position: 'absolute',
              width: '80px',
              height: '40px',
              background: 'linear-gradient(45deg, #3b82f6, #60a5fa)',
              borderRadius: '0 0 50% 50%',
              transform: 'rotate(15deg)',
              bottom: '10px',
              right: '20px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}