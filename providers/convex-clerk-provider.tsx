'use client'

import { ReactNode } from 'react'
import { ConvexReactClient, AuthLoading, Authenticated } from 'convex/react'
import { ConvexProviderWithClerk } from 'convex/react-clerk'
import { useAuth } from '@clerk/nextjs'
import { Loading } from '@/components/auth/loading'

if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
  throw new Error('Missing NEXT_PUBLIC_CONVEX_URL in your .env file')
}

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL) // Initialize Convex client

export default function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}> {/* this is basically ConvexProvider but with Clerk auth integration */}
            <Authenticated> {/* Only render children when authenticated */}
            {children}
            </Authenticated>
            <AuthLoading> {/* Show loading state while auth is loading */}
                <Loading />
            </AuthLoading>
        </ConvexProviderWithClerk>
  )
}