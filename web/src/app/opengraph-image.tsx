import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'André | Software Engineer'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                        fontSize: 64,
                        background: 'linear-gradient(to right, #60a5fa, #c084fc)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        marginBottom: 20
                    }}>
                        Software Engineer
                    </div>
                    <div style={{ fontSize: 96, fontWeight: 'bold' }}>
                        André Ramos
                    </div>
                    <div style={{ fontSize: 32, color: '#94a3b8', marginTop: 30 }}>
                        Python • Java • Docker • AI
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
