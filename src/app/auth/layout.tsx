import ToastNotification from "@/ui/ToastNotification";

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>){
  return (
    <>
    <div className="flex">
      <main className="w-full min-h-screen bg-gray-100">
        {children}
      </main>
    </div>
    <ToastNotification />
    </>
  )
}