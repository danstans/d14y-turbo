import React, {ReactElement} from "react"
import { OverlayProvider } from "@react-aria/overlays"
import { SSRProvider } from "@react-aria/ssr"
import "../../styles/fonts.css"
import "../../styles/output.css"

type Props = React.PropsWithChildren<{}>

export function VisionProvider({ children }: Props) {

  return (
    <SSRProvider>
      <OverlayProvider>
          {children}
      </OverlayProvider>
    </SSRProvider>
  )
}