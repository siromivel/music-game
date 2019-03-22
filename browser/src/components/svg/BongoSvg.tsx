import React, { CSSProperties } from "react"

type BongoProps = {
    primary: string, //"#FFE477" 
    secondary: string, //"#FFA733"
    tertiary: string,  // "#FFF5CC"
    quaternary: string, //"#FFC477"
}

export const BongoSvg = (props: BongoProps) => {

    const svgStyle: CSSProperties = { enableBackground: "new 0 0 511.998 511.998" } as CSSProperties
    const primary: CSSProperties = { fill: props.primary } as CSSProperties
    const secondary: CSSProperties = { fill: props.secondary } as CSSProperties
    const tertiary: CSSProperties =  { fill: props.tertiary } as CSSProperties
    const quaternary: CSSProperties = { fill: props.quaternary } as CSSProperties
    const black: CSSProperties = { fill:" #FFFFFF" } as CSSProperties

    return (
        <div className="token-svg">
            <svg className="instrument-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 511.998 511.998" style={svgStyle} xmlSpace="preserve">
                <rect x="199.015" y="245.13" style={black} width="112.959" height="56.479"/>
                <path style={tertiary} d="M462.08,167.63H322.758c-14.533,0-26.423,11.89-26.423,26.423v14.581
                    c0,14.533,11.89,26.423,26.423,26.423H462.08c14.533,0,26.423-11.89,26.423-26.423v-14.581
                    C488.503,179.521,476.613,167.63,462.08,167.63z"/>
                <path style={primary} d="M342.356,208.635v-14.581c0-14.533,11.89-26.423,26.423-26.423h-46.02
                    c-14.533,0-26.423,11.89-26.423,26.423v14.581c0,14.533,11.89,26.423,26.423,26.423h46.02
                    C354.247,235.058,342.356,223.168,342.356,208.635z"/>
                <rect x="295.229" y="203.231" style={quaternary} width="192.166" height="143.458"/>
                <rect x="295.229" y="203.231" style={secondary} width="46.02" height="143.458"/>
                <path style={tertiary} d="M189.575,166.041H50.253c-14.533,0-26.423,11.89-26.423,26.423v14.581
                    c0,14.533,11.89,26.423,26.423,26.423h139.322c14.533,0,26.423-11.89,26.423-26.423v-14.581
                    C215.998,177.931,204.107,166.041,189.575,166.041z"/>
                <g>
                    <path style={primary} d="M69.85,207.045v-14.581c0-14.533,11.89-26.423,26.423-26.423h-46.02
                        c-14.533,0-26.423,11.89-26.423,26.423v14.581c0,14.533,11.89,26.423,26.423,26.423h46.02
                        C81.74,233.468,69.85,221.578,69.85,207.045z"/>
                    <circle style={primary} cx="377.406" cy="190.669" r="4.707"/>
                    <circle style={primary} cx="411.922" cy="186.486" r="4.707"/>
                    <circle style={primary} cx="441.73" cy="190.669" r="4.707"/>
                </g>
                <path style={secondary} d="M454.281,312.494c-4.333,0-7.844-3.512-7.844-7.844v-60.344c0-4.332,3.511-7.844,7.844-7.844
                    s7.844,3.512,7.844,7.844v60.344C462.125,308.982,458.614,312.494,454.281,312.494z"/>
                <rect x="23.83" y="202.749" style={quaternary} width="192.166" height="143.458"/>
                <rect x="23.83" y="202.749" style={secondary} width="46.02" height="143.458"/>
                <g>
                    <circle style={primary} cx="107.038" cy="185.963" r="4.707"/>
                    <circle style={primary} cx="140.507" cy="183.871" r="4.707"/>
                    <circle style={primary} cx="173.453" cy="185.963" r="4.707"/>
                </g>
                <path style={secondary} d="M182.693,312.494c-4.332,0-7.844-3.512-7.844-7.844v-60.344c0-4.332,3.512-7.844,7.844-7.844
                    c4.332,0,7.844,3.512,7.844,7.844v60.344C190.537,308.982,187.025,312.494,182.693,312.494z"/>
                <path d="M499.883,336.358c15.029-37.5,17.001-84.542,0.665-118.052c2.211-1.745,3.642-4.439,3.642-7.457
                    c0-4.66-3.402-8.556-7.843-9.348v-7.447c0-18.895-15.372-34.267-34.267-34.267H322.758c-18.894,0-34.267,15.372-34.267,34.267v7.447
                    c-4.441,0.793-7.843,4.688-7.843,9.348c0,2.903,1.322,5.51,3.391,7.257c-2.225,4.966-4.718,11.428-6.876,19.186h-42.166
                    c-2.099-8.253-4.633-15.176-6.955-20.575c2.211-1.745,3.642-4.439,3.642-7.457c0-4.66-3.401-8.556-7.842-9.347v-7.447
                    c0-18.895-15.372-34.267-34.267-34.267h-16.121c-4.332,0-7.844,3.512-7.844,7.844c0,4.332,3.512,7.844,7.844,7.844h16.122
                    c10.244,0,18.579,8.335,18.579,18.579v7.291H31.674v-7.291c0-10.244,8.335-18.579,18.579-18.579h93.74
                    c4.332,0,7.844-3.512,7.844-7.844c0-4.332-3.512-7.844-7.844-7.844h-93.74c-18.895,0-34.267,15.373-34.267,34.267v7.447
                    c-4.441,0.793-7.842,4.688-7.842,9.347c0,3.255,1.659,6.14,4.172,7.854c-17.864,42.805-14.82,80.977-0.298,117.966
                    c-2.342,1.735-3.874,4.509-3.874,7.631c0,5.227,4.277,9.503,9.503,9.503h204.535c5.226,0,9.503-4.277,9.503-9.503
                    c0-3.311-1.719-6.238-4.307-7.941c3.508-8.752,6.113-17.213,7.989-25.309h39.914c1.873,8.861,4.615,18.179,8.456,27.857
                    c-1.892,1.74-3.089,4.224-3.089,6.983c0,5.226,4.277,9.503,9.503,9.503h204.535c5.227,0,9.504-4.277,9.504-9.503
                    C504.191,340.986,502.47,338.059,499.883,336.358z M23.921,322.037c-19.012-49.566-1.95-86.451,0-91.752V322.037z M112.069,333.204
                    H39.61V218.761h72.46V333.204z M200.265,333.204h-72.507V218.761h72.507V333.204z M215.954,228.78
                    c0.947,2.574,1.893,5.419,2.785,8.511h-2.785V228.78z M215.954,320.532v-11.073h3.333
                    C218.327,313.149,217.213,316.841,215.954,320.532z M222.455,293.77h-6.501V252.98h6.265
                    C224.371,266.478,224.441,280.101,222.455,293.77z M272.756,293.77h-34.548c2.018-15.552,1.464-29.359-0.132-40.791h35.648
                    C271.905,264.245,271.033,278.066,272.756,293.77z M295.382,323.628c-1.612-4.723-2.958-9.448-4.08-14.169h4.08V323.628z
                    M295.382,293.77h-6.907c-1.677-13.675-1.283-27.298,1.189-40.791h5.717v40.791H295.382z M295.382,237.291h-1.85
                    c0.607-1.918,1.228-3.726,1.85-5.417V237.291z M384.576,334.794H311.07V220.351h73.506V334.794z M471.725,334.794h-71.46V220.351
                    h71.46V334.794z M480.659,201.344H304.181v-7.291c0-10.244,8.335-18.579,18.579-18.579h139.322c10.244,0,18.579,8.335,18.579,18.579
                    v7.291H480.659z M487.414,325.035v-97.406C503.287,262.797,496.586,299.733,487.414,325.035z"/>
            </svg>
        </div>
    )
}
