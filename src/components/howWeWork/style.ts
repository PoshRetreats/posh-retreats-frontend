import styled from "styled-components";
import BrandColors from "utilities/styles/colors";
import media from "utilities/styles/media";

export const HowWeWorkContainer = styled.div`
	padding: 26px 64px;
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 150px;
	text-align: center;
	max-width: 1400px;
	margin: 0 auto;
	margin-bottom: 200px;
	margin-top: 250px;

	h1 {
		color: var(--text-color, #020e07);
		text-align: center;
		/* font-family: Quando; */
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin: 0;
		margin-bottom: 90px;

		${media.tablet`
    font-size: 18px;
		margin-bottom: 10px;
	`}
	}

	${media.tablet`
		align-items: center;
		padding: 26px 16px;
    margin-bottom: 0px;
	`}
`;

export const HowWeWorkWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;

	${media.tablet`
		flex-direction: column;
		align-items: center;
		padding: 26px 16px;
	`}
`;

export const WrapperContainer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 260px;
	/* height: 280px; */
	flex-shrink: 0;
	border-radius: 16px;
	padding: 25px 20px;
	text-align: center;
	background-color: ${BrandColors.main3};
	/* margin-bottom: 30px;
  padding-bottom: 50px; */
	margin-right: 8px;
	min-height: 300px;

  ${media.tablet`
  min-height: fit-content;
	margin-bottom: 16px;
`}
 
 ${media.mobile`
  width: 100%;
`}

	h2 {
		margin: 0;
		color: var(--text-color, #020e07);
		/* font-family: Quando; */
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;

		${media.tablet`
    font-size: 14px;
	`}
	}

	h3 {
		margin: 0;
		margin-top: 8px;
		margin-bottom: 32px;

		${media.tablet`
    font-size: 14px;
	`}
	}

	p {
		color: var(--text-color, #020e07);
		text-align: center;

		/* Text 5 */
		font-family: Sora;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;

    ${media.tablet`
    font-size: 12px;
	`}
	}
`;
