import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
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
        {/* Sam4You Logo Representation */}
        <div
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Upper curved shape */}
          <div
            style={{
              position: 'absolute',
              width: '16px',
              height: '8px',
              background: 'linear-gradient(45deg, #1e40af, #3b82f6)',
              borderRadius: '50% 50% 0 0',
              transform: 'rotate(-15deg)',
              top: '2px',
              left: '4px',
            }}
          />
          {/* Lower curved shape */}
          <div
            style={{
              position: 'absolute',
              width: '16px',
              height: '8px',
              background: 'linear-gradient(45deg, #3b82f6, #60a5fa)',
              borderRadius: '0 0 50% 50%',
              transform: 'rotate(15deg)',
              bottom: '2px',
              right: '4px',
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