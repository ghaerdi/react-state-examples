import { ContextProvider } from "./components/state-examples/context-provider"
import { SimpleState } from "./components/state-examples/simple-state"
import { Zustand } from "./components/state-examples/zustand"
import { ThemeProvider } from "@/components/theme-provider"
import { Jotai } from "./components/state-examples/jotai"
import { Recoil } from "./components/state-examples/recoil"
import { RecoilRoot } from "recoil"
import { ObjectState } from "./components/state-examples/object-state"

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RecoilRoot>
        <div className="p-10 min-h-screen w-screen grid grid-cols-3 justify-items-center items-center gap-5">
          <ContextProvider />
          <ObjectState />
          <SimpleState />
          <Zustand />
          <Jotai />
          <Recoil />
        </div>
      </RecoilRoot>
    </ThemeProvider>
  )
}

