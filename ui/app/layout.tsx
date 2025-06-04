import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignUp,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PDF Chat AI",
  description: "Chat with your PDFs using AI - Upload, ask questions, get intelligent answers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignUpUrl="/"
      afterSignInUrl="/"
      appearance={{
        elements: {
          footer: "hidden",
          footerAction: "hidden",
          footerActionText: "hidden",
          footerPages: "hidden",
          footerActionLink: "hidden",
          footerText: "hidden",
          footer__clerk: "hidden",
          footer__poweredByClerk: "hidden",
          poweredByClerk: "hidden"
        }
      }}
    >
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <SignedOut>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
             
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
              </div>

              
              <div className="relative z-10 pt-8 pb-4">
                <div className="text-center">
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    PDF Chat AI
                  </h1>
                  <p className="mt-2 text-gray-600 text-lg">
                    Transform your PDFs into intelligent conversations
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex items-center justify-center px-4 pb-8">
                <div className="w-full max-w-md">
                
                  <div className="mb-8 grid grid-cols-1 gap-4">
                    <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Smart Conversations</h3>
                          <p className="text-sm text-gray-600">Ask questions about your PDF content</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Instant Answers</h3>
                          <p className="text-sm text-gray-600">Get accurate responses with source citations</p>
                        </div>
                      </div>
                    </div>
                  </div>

                 
                  <div className="bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl shadow-xl p-2">
                    <div className="bg-white rounded-xl shadow-inner p-4">
                      <SignUp 
                        routing="hash"
                        signInUrl="#/sign-in"
                        forceRedirectUrl="/"
                        appearance={{
                          elements: {
                            rootBox: "w-full",
                            card: "shadow-none border-0 bg-transparent",
                            headerTitle: "text-2xl font-bold text-gray-800",
                            headerSubtitle: "text-gray-600",
                            socialButtonsBlockButton: "border-gray-200 hover:bg-gray-50 transition-colors rounded-lg py-3",
                            formButtonPrimary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg rounded-lg py-3",
                            dividerLine: "bg-gray-200",
                            dividerText: "text-gray-500 text-sm",
                            formFieldInput: "border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all rounded-lg py-2.5",
                            formFieldLabel: "text-gray-700 font-medium text-sm",
                            footer: "hidden",
                            footerPages: "hidden",
                            footerAction: "hidden",
                            footerActionText: "hidden",
                            logoBox: "hidden",
                            logoImage: "hidden",
                            headerBackLink: "hidden",
                            identityPreviewEditButton: "text-blue-600 hover:text-blue-700",
                            formResendCodeLink: "text-blue-600 hover:text-blue-700",
                            otpCodeFieldInput: "border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all rounded-lg",
                            alternativeMethodsBlockButton: "text-blue-600 hover:text-blue-700",
                            footer__clerk: "hidden",
                            footer__poweredByClerk: "hidden",
                            poweredByClerk: "hidden",
                            footerText: "hidden"
                          },
                          variables: {
                            colorPrimary: "#2563eb",
                            colorBackground: "#ffffff",
                            colorInputBackground: "#ffffff",
                            colorInputText: "#374151"
                          },
                          layout: {
                            privacyPageUrl: "",
                            termsPageUrl: "",
                            logoImageUrl: "",
                            showOptionalFields: false,
                            logoPlacement: undefined,
                            helpPageUrl: "",
                            socialButtonsPlacement: "top"
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500 font-medium">
                      🔒 Secure • 🔐 Private • 🤖 AI-Powered
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Your data is encrypted and never shared
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SignedOut>
          
          <SignedIn>
            <div className="absolute top-4 right-4 z-50">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-1 shadow-sm">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8",
                    }
                  }}
                />
              </div>
            </div>
            {children}
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}