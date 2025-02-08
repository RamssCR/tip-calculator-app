import TipForm from "./components/tip-form/TipForm"

export default function App() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center gap-10 py-10 md:px-8 lg:16">
        <h1 className="text-neutral-primary-dark-grayish font-semibold text-2xl">S P L I<br /> T T E R</h1>
        <TipForm />
    </main>
  )
}