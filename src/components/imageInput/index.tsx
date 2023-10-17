import { ImageInputDiv, Input } from "./style";

type ImageInputProps = {
	onClick?: () => void;
	ref?: any;
	onChange?: (event: any) => void;
};
export function ImageInput(props: ImageInputProps) {
	return (
		<>
			<ImageInputDiv>
				<label htmlFor="fileInput">
					<p>select Image</p>
				</label>
				<Input
					ref={props.ref}
					type="file"
					id="fileInput"
					onChange={props.onChange}
					accept="image/*"
				/>
			</ImageInputDiv>
		</>
	);
}
