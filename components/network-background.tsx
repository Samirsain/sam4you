'use client'

import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 1200
      const y = ((e.clientY - rect.top) / rect.height) * 600

      // Update line positions based on mouse position
      const lines = svg.querySelectorAll('.network-lines line')
      lines.forEach((line, index) => {
        const lineElement = line as SVGLineElement
        const originalX1 = parseFloat(lineElement.getAttribute('x1') || '0')
        const originalY1 = parseFloat(lineElement.getAttribute('y1') || '0')
        const originalX2 = parseFloat(lineElement.getAttribute('x2') || '0')
        const originalY2 = parseFloat(lineElement.getAttribute('y2') || '0')

        // Calculate distance from mouse to line
        const distance = Math.sqrt(Math.pow(x - (originalX1 + originalX2) / 2, 2) + Math.pow(y - (originalY1 + originalY2) / 2, 2))
        const maxDistance = 200

        if (distance < maxDistance) {
          const intensity = 1 - (distance / maxDistance)
          const offsetX = (x - (originalX1 + originalX2) / 2) * intensity * 0.3
          const offsetY = (y - (originalY1 + originalY2) / 2) * intensity * 0.3

          lineElement.setAttribute('x1', (originalX1 + offsetX).toString())
          lineElement.setAttribute('y1', (originalY1 + offsetY).toString())
          lineElement.setAttribute('x2', (originalX2 + offsetX).toString())
          lineElement.setAttribute('y2', (originalY2 + offsetY).toString())
          lineElement.setAttribute('stroke-opacity', (0.2 + intensity * 0.3).toString())
        } else {
          // Reset to original position
          lineElement.setAttribute('x1', originalX1.toString())
          lineElement.setAttribute('y1', originalY1.toString())
          lineElement.setAttribute('x2', originalX2.toString())
          lineElement.setAttribute('y2', originalY2.toString())
          lineElement.setAttribute('stroke-opacity', '0.2')
        }
      })
    }

    svg.addEventListener('mousemove', handleMouseMove)
    return () => svg.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg ref={svgRef} className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
        {/* Network dots and lines */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="rgba(255,255,255,0.3)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Interactive lines that connect dots */}
        <g className="network-lines">
          <line x1="100" y1="150" x2="300" y2="200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="300" y1="200" x2="500" y2="180" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="500" y1="180" x2="700" y2="220" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="700" y1="220" x2="900" y2="190" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="900" y1="190" x2="1100" y2="210" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          
          <line x1="150" y1="300" x2="350" y2="320" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="350" y1="320" x2="550" y2="290" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="550" y1="290" x2="750" y2="330" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="750" y1="330" x2="950" y2="310" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          
          <line x1="200" y1="450" x2="400" y2="430" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="400" y1="430" x2="600" y2="460" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="600" y1="460" x2="800" y2="440" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="800" y1="440" x2="1000" y2="470" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          
          {/* Vertical connections */}
          <line x1="300" y1="200" x2="300" y2="320" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="500" y1="180" x2="500" y2="290" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="700" y1="220" x2="700" y2="330" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="400" y1="320" x2="400" y2="430" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="600" y1="290" x2="600" y2="460" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <line x1="800" y1="330" x2="800" y2="440" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        </g>
      </svg>
    </div>
  )
}
