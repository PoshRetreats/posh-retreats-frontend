import { Image, SelectedImageDiv } from "./style";

type SelectedImageProps = {
    src: string;
    alt: string;
}

export function SelectedTripImage(props: SelectedImageProps) {
    return (
        <>
            <SelectedImageDiv>
                <Image src={props.src} alt={props.alt} />
            </SelectedImageDiv>
        </>
    )
}