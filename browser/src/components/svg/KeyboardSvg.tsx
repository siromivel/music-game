import React, { CSSProperties } from "react"

type BongoProps = {
    primary: string,    // #61C2AB
    secondary: string,  // #F4EFEF
    tertiary: string,   // #E36D60
    quaternary: string, //"#CDEEF9"
}

export const BongoSvg = (props: BongoProps) => {

    const svgStyle: CSSProperties = { enableBackground: "new 0 0 508.051 508.051" } as CSSProperties
    const primary: CSSProperties = { fill: props.primary } as CSSProperties 
    const secondary: CSSProperties = { fill: props.secondary } as CSSProperties 
    const tertiary: CSSProperties =  { fill: props.tertiary } as CSSProperties 
    const quaternary: CSSProperties = { fill: props.quaternary } as CSSProperties

    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 508.051 508.051" style={svgStyle} xmlSpace="preserve">
        <path style={primary} d="M490.051,138.025h-2h-470c-7.6,0-16,6.4-16,14v204c0,7.6,8.4,14,16,14h472c7.6,0,12-6.4,12-14v-202
            v-2C502.051,144.425,497.651,138.025,490.051,138.025z"/>
        <g>
            <path style={secondary} d="M450.051,258.025v70c0,1.2,1.2,2,0,2h-4v40h20v-112H450.051z"/>
            <path style={secondary} d="M130.051,330.025c-1.2,0-4-0.8-4-2v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20V330.025L130.051,330.025z"
                />
            <path style={secondary} d="M54.051,328.025v-70h-16v112h20v-40l0,0C56.851,330.025,54.051,329.225,54.051,328.025z"/>
            <path style={secondary} d="M78.051,328.025v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20v-40l0,0
                C80.851,330.025,78.051,329.225,78.051,328.025z"/>
            <path style={secondary} d="M102.051,328.025v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20v-40l0,0
                C104.851,330.025,102.051,329.225,102.051,328.025z"/>
            <path style={secondary} d="M202.051,330.025c-1.2,0-4-0.8-4-2v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20V330.025L202.051,330.025z"
                />
            <path style={secondary} d="M150.051,328.025v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20v-40l0,0
                C152.851,330.025,150.051,329.225,150.051,328.025z"/>
            <path style={secondary} d="M174.051,328.025v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20v-40l0,0
                C176.851,330.025,174.051,329.225,174.051,328.025z"/>
            <path style={secondary} d="M298.051,330.025c-1.2,0-4-0.8-4-2v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20V330.025L298.051,330.025z"
                />
            <path style={secondary} d="M222.051,328.025v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20v-40l0,0
                C224.851,330.025,222.051,329.225,222.051,328.025z"/>
            <path style={secondary} d="M246.051,328.025v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20v-40l0,0
                C248.851,330.025,246.051,329.225,246.051,328.025z"/>
            <path style={secondary} d="M270.051,328.025v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20v-40l0,0
                C272.851,330.025,270.051,329.225,270.051,328.025z"/>
            <path style={secondary} d="M346.051,330.025c-1.2,0-4-0.8-4-2v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20V330.025L346.051,330.025z"
                />
            <path style={secondary} d="M318.051,328.025v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20v-40l0,0
                C320.851,330.025,318.051,329.225,318.051,328.025z"/>
            <path style={secondary} d="M370.051,330.025c-1.2,0-4-0.8-4-2v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20V330.025L370.051,330.025z"
                />
            <path style={secondary} d="M394.051,330.025c-1.2,0-4-0.8-4-2v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20V330.025L394.051,330.025z"
                />
            <path style={secondary} d="M418.051,330.025c-1.2,0-4-0.8-4-2v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20V330.025L418.051,330.025z"
                />
            <path style={secondary} d="M442.051,330.025c-1.2,0-4-0.8-4-2v-70h-12v70c0,1.2,1.2,2,0,2h-4v40h20V330.025L442.051,330.025z"
                />
        </g>
        <path style={quaternary} d="M180.051,180.025c-7.6,0-14,6.4-14,14s6.4,14,14,14s14-6.4,14-14S187.651,180.025,180.051,180.025z"
            />
        <path style={tertiary} d="M260.051,180.025c-7.6,0-14,6.4-14,14s6.4,14,14,14s14-6.4,14-14S267.651,180.025,260.051,180.025z"
            />
        <circle style={secondary} cx="220.051" cy="194.025" r="6"/>
        <path d="M488.051,376.025h-472c-10,0-15.6-6.8-16-20v-204c-0.4-6.4,1.6-12,4.8-15.6c2.8-2.8,6.8-4.4,11.2-4.4h472
            c11.2,0,20,8.8,20,20v204C508.051,367.225,499.251,376.025,488.051,376.025z M16.051,140.025c-2.4,0-4,0.8-5.2,2
            c-2,2-2.8,5.6-2.8,10v204c0.4,11.2,4.4,12,8,12h472c6.8,0,12-5.2,12-12v-204c0-6.8-5.2-12-12-12H16.051z"/>
        <path d="M468.051,374.025c-2.4,0-4-1.6-4-4v-110h-424v110c0,2.4-1.6,4-4,4s-4-1.6-4-4v-114c0-2.4,1.6-4,4-4h432c2.4,0,4,1.6,4,4v114
            C472.051,372.425,470.451,374.025,468.051,374.025z"/>
        <path d="M252.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C256.051,372.425,254.451,374.025,252.051,374.025z"/>
        <path d="M228.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C232.051,372.425,230.451,374.025,228.051,374.025z"/>
        <path d="M204.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C208.051,372.425,206.451,374.025,204.051,374.025z"/>
        <path d="M180.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C184.051,372.425,182.451,374.025,180.051,374.025z"/>
        <path d="M156.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C160.051,372.425,158.451,374.025,156.051,374.025z"/>
        <path d="M132.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C136.051,372.425,134.451,374.025,132.051,374.025z"/>
        <path d="M108.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C112.051,372.425,110.451,374.025,108.051,374.025z"/>
        <path d="M84.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C88.051,372.425,86.451,374.025,84.051,374.025z"/>
        <path d="M60.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C64.051,372.425,62.451,374.025,60.051,374.025z"/>
        <path d="M444.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C448.051,372.425,446.451,374.025,444.051,374.025z"/>
        <path d="M420.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C424.051,372.425,422.451,374.025,420.051,374.025z"/>
        <path d="M396.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C400.051,372.425,398.451,374.025,396.051,374.025z"/>
        <path d="M372.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C376.051,372.425,374.451,374.025,372.051,374.025z"/>
        <path d="M348.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C352.051,372.425,350.451,374.025,348.051,374.025z"/>
        <path d="M324.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C328.051,372.425,326.451,374.025,324.051,374.025z"/>
        <path d="M300.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C304.051,372.425,302.451,374.025,300.051,374.025z"/>
        <path d="M276.051,374.025c-2.4,0-4-1.6-4-4v-40c0-2.4,1.6-4,4-4s4,1.6,4,4v40C280.051,372.425,278.451,374.025,276.051,374.025z"/>
        <path d="M64.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C68.051,330.425,66.451,332.025,64.051,332.025z"/>
        <path d="M88.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C92.051,330.425,90.451,332.025,88.051,332.025z"/>
        <path d="M112.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C116.051,330.425,114.451,332.025,112.051,332.025z"/>
        <path d="M136.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C140.051,330.425,138.451,332.025,136.051,332.025z"/>
        <path d="M160.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C164.051,330.425,162.451,332.025,160.051,332.025z"/>
        <path d="M184.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C188.051,330.425,186.451,332.025,184.051,332.025z"/>
        <path d="M208.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C212.051,330.425,210.451,332.025,208.051,332.025z"/>
        <path d="M232.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C236.051,330.425,234.451,332.025,232.051,332.025z"/>
        <path d="M256.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C260.051,330.425,258.451,332.025,256.051,332.025z"/>
        <path d="M280.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C284.051,330.425,282.451,332.025,280.051,332.025z"/>
        <path d="M304.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C308.051,330.425,306.451,332.025,304.051,332.025z"/>
        <path d="M328.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C332.051,330.425,330.451,332.025,328.051,332.025z"/>
        <path d="M352.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C356.051,330.425,354.451,332.025,352.051,332.025z"/>
        <path d="M376.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C380.051,330.425,378.451,332.025,376.051,332.025z"/>
        <path d="M400.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C404.051,330.425,402.451,332.025,400.051,332.025z"/>
        <path d="M424.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C428.051,330.425,426.451,332.025,424.051,332.025z"/>
        <path d="M448.051,332.025h-8c-2.4,0-4-1.6-4-4v-72c0-2.4,1.6-4,4-4h8c2.4,0,4,1.6,4,4v72
            C452.051,330.425,450.451,332.025,448.051,332.025z"/>
        <path d="M44.051,234.025c-2.4,0-4-1.6-4-4v-68c0-2.4,1.6-4,4-4s4,1.6,4,4v68C48.051,232.425,46.451,234.025,44.051,234.025z"/>
        <path d="M50.051,176.025h-12c-2.4,0-4-1.6-4-4s1.6-4,4-4h12c2.4,0,4,1.6,4,4S52.451,176.025,50.051,176.025z"/>
        <path d="M72.051,234.025c-2.4,0-4-1.6-4-4v-68c0-2.4,1.6-4,4-4s4,1.6,4,4v68C76.051,232.425,74.451,234.025,72.051,234.025z"/>
        <path d="M78.051,228.025h-12c-2.4,0-4-1.6-4-4s1.6-4,4-4h12c2.4,0,4,1.6,4,4S80.451,228.025,78.051,228.025z"/>
        <path d="M100.051,234.025c-2.4,0-4-1.6-4-4v-68c0-2.4,1.6-4,4-4s4,1.6,4,4v68C104.051,232.425,102.451,234.025,100.051,234.025z"/>
        <path d="M106.051,176.025h-12c-2.4,0-4-1.6-4-4s1.6-4,4-4h12c2.4,0,4,1.6,4,4S108.451,176.025,106.051,176.025z"/>
        <path d="M128.051,234.025c-2.4,0-4-1.6-4-4v-68c0-2.4,1.6-4,4-4s4,1.6,4,4v68C132.051,232.425,130.451,234.025,128.051,234.025z"/>
        <path d="M134.051,228.025h-12c-2.4,0-4-1.6-4-4s1.6-4,4-4h12c2.4,0,4,1.6,4,4S136.451,228.025,134.051,228.025z"/>
        <path d="M432.051,234.025c-2.4,0-4-1.6-4-4v-68c0-2.4,1.6-4,4-4s4,1.6,4,4v68C436.051,232.425,434.451,234.025,432.051,234.025z"/>
        <path d="M438.051,176.025h-12c-2.4,0-4-1.6-4-4s1.6-4,4-4h12c2.4,0,4,1.6,4,4S440.451,176.025,438.051,176.025z"/>
        <path d="M460.051,234.025c-2.4,0-4-1.6-4-4v-68c0-2.4,1.6-4,4-4s4,1.6,4,4v68C464.051,232.425,462.451,234.025,460.051,234.025z"/>
        <path d="M466.051,228.025h-12c-2.4,0-4-1.6-4-4s1.6-4,4-4h12c2.4,0,4,1.6,4,4S468.451,228.025,466.051,228.025z"/>
        <path d="M180.051,214.025c-11.2,0-20-8.8-20-20s8.8-20,20-20s20,8.8,20,20S191.251,214.025,180.051,214.025z M180.051,182.025
            c-6.8,0-12,5.2-12,12s5.2,12,12,12s12-5.2,12-12S186.851,182.025,180.051,182.025z"/>
        <path d="M260.051,214.025c-11.2,0-20-8.8-20-20s8.8-20,20-20s20,8.8,20,20S271.251,214.025,260.051,214.025z M260.051,182.025
            c-6.8,0-12,5.2-12,12s5.2,12,12,12s12-5.2,12-12S266.851,182.025,260.051,182.025z"/>
        <path d="M220.051,206.025c-6.8,0-12-5.2-12-12s5.2-12,12-12s12,5.2,12,12S226.851,206.025,220.051,206.025z M220.051,190.025
            c-2.4,0-4,1.6-4,4s1.6,4,4,4s4-1.6,4-4S222.451,190.025,220.051,190.025z"/>
        <path d="M318.051,200.025h-24c-2.4,0-4-1.6-4-4s1.6-4,4-4h24c2.4,0,4,1.6,4,4S320.451,200.025,318.051,200.025z"/>
        <path d="M318.051,184.025h-24c-2.4,0-4-1.6-4-4s1.6-4,4-4h24c2.4,0,4,1.6,4,4S320.451,184.025,318.051,184.025z"/>
        <path d="M318.051,216.025h-24c-2.4,0-4-1.6-4-4s1.6-4,4-4h24c2.4,0,4,1.6,4,4S320.451,216.025,318.051,216.025z"/>
        <path d="M406.051,200.025h-68c-2.4,0-4-1.6-4-4s1.6-4,4-4h68c2.4,0,4,1.6,4,4S408.451,200.025,406.051,200.025z"/>
        <path d="M406.051,184.025h-68c-2.4,0-4-1.6-4-4s1.6-4,4-4h68c2.4,0,4,1.6,4,4S408.451,184.025,406.051,184.025z"/>
        <path d="M406.051,216.025h-68c-2.4,0-4-1.6-4-4s1.6-4,4-4h68c2.4,0,4,1.6,4,4S408.451,216.025,406.051,216.025z"/>
        </svg>

    )
}
