import { GenIcon, IconType } from "react-icons";

export function TBAIcon(props: any) {

	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={`${props.className}`} xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width={"1em"} height={"1em"} viewBox="0 0 72 112" enable-background="new 0 0 72 112" xmlSpace="preserve" onClick={props.onClick}>
			<svg>
				<g>
					<g>
						<rect x="8" y="20" fill="currentColor" width="6" height="64"></rect>
					</g>
					<g>
						<rect x="58" y="20" fill="currentColor" width="6" height="64"></rect>
					</g>
					<g>
						<path fill="currentColor" d="M36,112C20.561,112,8,99.439,8,84h6c0,12.131,9.869,22,22,22V112z"></path>
					</g>
					<g>
						<path fill="currentColor" d="M36,112v-6c12.131,0,22-9.869,22-22h6C64,99.439,51.439,112,36,112z"></path>
					</g>
					<g>
						<rect x="33" y="20" fill="currentColor" width="6" height="89"></rect>
					</g>
					<g>
						<rect x="11" y="78" fill="currentColor" width="50" height="6"></rect>
					</g>
					<g>
						<rect x="11" y="50" fill="currentColor" width="50" height="6"></rect>
					</g>
					<g id="Lamp_Rectangle_4_">
						<path fill="currentColor" d="M72,24c0,2.2-1.8,4-4,4H4c-2.2,0-4-1.8-4-4V4c0-2.2,1.8-4,4-4h64c2.2,0,4,1.8,4,4V24z"></path>
					</g>
				</g>
			</svg>
		</svg>
	)
	// return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fillRule":"evenodd","stroke":"#000","strokeWidth":"2","d":"M12,22 L12,2 M2,12 L22,12"}}]})(props);
}