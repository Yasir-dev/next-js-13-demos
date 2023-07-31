import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Post title',
    description: 'Post text here',
    openGraph: {
      title: 'Post OG title'
    },
  }
  
  export default function PostLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        {children}
      </div>
    )
  }