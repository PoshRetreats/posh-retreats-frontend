import { ImageInputDiv, Input,UploadedImage } from "./style";

type ImageInputProps = {
	onClick?: () => void;
	inneRef?: any;
	onChange?: (event: any) => void;
    image?: string
};
export function ImageInput(props: ImageInputProps) {
	return (
		<>
       
			<ImageInputDiv>
           {props.image &&  <UploadedImage src = {props.image} alt="" />}
				<label htmlFor="fileInput">
					<p>select Image</p>
				</label>
				<Input
					ref={props.inneRef}
					type="file"
					id="fileInput"
					onChange={props.onChange}
					// accept="image/*"
				/>
			</ImageInputDiv>
		</>
	);
}
