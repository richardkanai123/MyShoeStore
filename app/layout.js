import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from '@/components/NavBar'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
export const metadata = {
  title: 'BizShop',
  description: 'Best online Shop Model',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: [dark],
      variables: { colorPrimary: 'white' },
      userProfile: {
        baseTheme: [dark],
        variables: {
          colorPrimary: '#00FFFF',
          colorBackground: '#0D3D59',
        }
      }
    }
    } >
      <html lang="en" suppressHydrationWarning>
        <body className='w-full mx-auto  bg-slate-200  max-w-7xl dark:bg-sky-900 relative'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <main className='w-full flex flex-col align-middle justify-center items-center min-h-screen max-h-fit  '>
              {children}
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ ClerkProvider>
  )
}
